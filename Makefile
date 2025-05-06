project-name=cda-projet-2-team-1

docker-compose-dev=./docker-compose.dev.yml
default-env-dev=./files/.env-dev-default
docker-cmd=docker-compose --env-file $(default-env-dev) -f $(docker-compose-dev)

services=appointment-service frontend
volumes=care-plan-db

VOL_DELETE = $(volumes:%=$(project-name)_%.del)
IMAGES=$(services:%=$(project-name)-%)

dev: dev-build
	$(docker-cmd) up

dev-bg: dev-build
	$(docker-cmd) up -d

dev-build:
	$(docker-cmd) build

dev-rm:
	$(docker-cmd) rm

dev-down:
	$(docker-cmd) down

%.del:
	docker volume rm -f $*

delete-volumes: $(VOL_DELETE)

delete-images:
	docker rmi -f $(IMAGES)

dev-prune: dev-down dev-rm delete-volumes delete-images
