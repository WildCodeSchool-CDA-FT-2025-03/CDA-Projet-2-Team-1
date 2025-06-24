project-name=cda-projet-2-team-1
DOCKER_COMPOSE ?=docker compose
DOCKER_COMPOSE_FILE ?=./docker-compose.dev.yml
DOCKER_ENV ?=./files/.env-dev-default

docker-cmd=$(DOCKER_COMPOSE) --env-file $(DOCKER_ENV) -f $(DOCKER_COMPOSE_FILE)
docker-test=$(DOCKER_COMPOSE) --env-file $(DOCKER_ENV) -f ./docker-compose.test.yml

services=appointment-service frontend auth-service email-service
volumes=care-plan-db

VOLUMES=$(volumes:%=$(project-name)_%)
IMAGES=$(services:%=$(project-name)-%)

run: build
	$(docker-cmd) up

run-bg: build
	$(docker-cmd) up -d

build:
	$(docker-cmd) build

rm:
	$(docker-cmd) rm

down:
	$(docker-cmd) down
	sleep 1

delete-volumes:
	docker volume rm -f $(VOLUMES)

delete-images:
	docker rmi -f $(IMAGES)

clean: down rm delete-images

prune: clean delete-volumes

test-integration:
	$(docker-test) up appointment-service --abort-on-container-exit --exit-code-from appointment-service

test-email-integration:
	$(docker-test) up -d email-service
	sleep 1
	docker exec -it email-service-test sh -c "npm run test:integration"
	docker stop email-service-test

test: test-integration test-email-integration

deploy: clean run
