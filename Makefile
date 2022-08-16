export

ifeq ($(SKIP_DOCKER), true)
    DC :=
    FPM :=
    NODE := yarn
    ARTISAN := php artisan
    MYSQL :=
else
    DC := docker-compose exec
    DC_SYNC := CURRENT_USER=${CURRENT_ID}:${CURRENT_GROUP} docker-compose --file docker-compose-sync.yml
    FPM := $(DC) php-fpm
    NODE := $(DC) node yarn
    ARTISAN := $(FPM) php artisan
    MYSQL := $(DC) -T mysql
endif

.PHONY: start stop restart build \
	ssh env \
	truncate migrate seed reset-db \
	node-dev node-install node-test node-watch \
	composer-install dump-autoload \
	keygen \
	deploy phpunit frontend-build good \
	telescope

OS := $(shell uname)

start:
	@docker-compose up -d

stop:
	@docker-compose stop

# Docker sync for MacOs
start-sync:
	docker volume create --name=px
	@$(DC_SYNC) up -d
	docker-sync start

# Docker sync for MacOs
stop-sync:
	docker-sync stop
	@$(DC_SYNC) down

restart: stop start

build:
	@docker-compose build

ssh:
	@$(FPM) bash

ssh-node:
	$(DC) node bash

node-install:
	@$(NODE) install

node-build:
	@$(NODE) run build

node-landing:
	@$(NODE) run landing

node-serve:
	@$(NODE) run serve-container

node-watch-poll:
	@$(NODE) run watch-poll

node-dev:
	@$(NODE) run dev

node-test:
	@$(NODE) run test

e2e-ci:
	@$(NODE) -T run e2e:headless

ui:
	@$(NODE) run serve:mockups

eslint:
	@$(NODE) run lint
