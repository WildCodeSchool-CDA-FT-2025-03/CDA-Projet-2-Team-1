DOCKER_COMPOSE ?=docker compose
project-name=cda-projet-2-team-1

docker-compose-dev=./docker-compose.dev.yml
docker-compose-test=./docker-compose.test.yml
default-env-dev=./files/.env-dev-default
docker-dev=$(DOCKER_COMPOSE) --env-file $(default-env-dev) -f $(docker-compose-dev)
docker-test=$(DOCKER_COMPOSE) --env-file $(default-env-dev) -f $(docker-compose-test)

services=appointment-service frontend auth-service email-service
volumes=care-plan-db

VOLUMES=$(volumes:%=$(project-name)_%)
IMAGES=$(services:%=$(project-name)-%)

dev: dev-build
	$(docker-dev) up

dev-bg: dev-build
	$(docker-dev) up -d

dev-build:
	$(docker-dev) build

dev-rm:
	$(docker-dev) rm

dev-down:
	$(docker-dev) down
	sleep 1

delete-volumes:
	docker volume rm -f $(VOLUMES)

delete-images:
	docker rmi -f $(IMAGES)

dev-clean: dev-down dev-rm delete-images

dev-prune: dev-clean delete-volumes

test-integration:
	$(docker-test) up appointment-service --abort-on-container-exit --exit-code-from appointment-service

test-email-integration:
	$(docker-test) up -d email-service
	sleep 1
	docker exec -it email-service-test sh -c "npm run test:integration"
	docker stop email-service-test

test: test-integration test-email-integration

predeploy: dev-down dev-clean dev-bg
