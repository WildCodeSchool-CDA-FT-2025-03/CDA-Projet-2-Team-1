project-name=cda-projet-2-team-1

docker-compose-dev=./docker-compose.dev.yml
default-env-dev=./files/.env-dev-default
docker-dev=docker-compose --env-file $(default-env-dev) -f $(docker-compose-dev)

services=appointment-service frontend
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

dev-prune: dev-down dev-rm delete-volumes delete-images
