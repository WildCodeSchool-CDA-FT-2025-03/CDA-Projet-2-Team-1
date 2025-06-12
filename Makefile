project-name=cda-projet-2-team-1

docker-compose-dev=./docker-compose.dev.yml
docker-compose-test=./docker-compose.test.yml
default-env-dev=./files/.env-dev-default
docker-dev=docker compose --env-file $(default-env-dev) -f $(docker-compose-dev)
docker-test=docker compose --env-file $(default-env-dev) -f $(docker-compose-test)

services=appointment-service frontend auth-service
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
	$(docker-test) up --abort-on-container-exit --exit-code-from appointment-service

test: test-integration