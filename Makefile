docker-compose-dev =./docker-compose.dev.yml
default-env-dev =./files/.env-dev-default

dev: dev-build
	docker-compose --env-file $(default-env-dev) -f $(docker-compose-dev) up

dev-bg: dev-build
	docker-compose --env-file $(default-env-dev) -f $(docker-compose-dev) up -d

dev-build:
	docker-compose --env-file $(default-env-dev) -f $(docker-compose-dev) build

dev-rm:
	docker-compose -f $(docker-compose-dev) rm

dev-down:
	docker-compose -f $(docker-compose-dev) down

delete-db:
	docker volume rm cda-projet-2-team-1_care-plan-db

dev-prune: dev-down dev-rm delete-db
