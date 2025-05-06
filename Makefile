docker-compose-dev =./docker-compose.dev.yml
default-env-dev =./files/.env-dev-default
images = cda-projet-2-team-1-appointment-service cda-projet-2-team-1-frontend

dev: dev-build
	docker-compose --env-file $(default-env-dev) -f $(docker-compose-dev) up

dev-bg: dev-build
	docker-compose --env-file $(default-env-dev) -f $(docker-compose-dev) up -d

dev-build:
	docker-compose --env-file $(default-env-dev) -f $(docker-compose-dev) build

dev-rm:
	docker-compose --env-file $(default-env-dev) -f $(docker-compose-dev) rm

dev-down:
	docker-compose --env-file $(default-env-dev) -f $(docker-compose-dev) down

delete-db:
	docker volume rm cda-projet-2-team-1_care-plan-db

delete-img:
	docker rmi $(images)

dev-prune: dev-down dev-rm delete-db delete-img
