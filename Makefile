dev: dev-build
	docker-compose --env-file ./files/.env-dev-default -f ./docker-compose.dev.yml up

dev-build:
	docker-compose --env-file ./files/.env-dev-default -f ./docker-compose.dev.yml build

dev-rm:
	docker-compose -f ./docker-compose.dev.yml rm

dev-down:
	docker-compose -f ./docker-compose.dev.yml down

delete-db:
	docker volume rm cda-projet-2-team-1_care-plan-db

dev-prune: dev-down dev-rm delete-db
