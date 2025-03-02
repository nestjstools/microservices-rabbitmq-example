# @nestjstools/microservices-rabbitmq example application

This repository showcases a `@nestjstools/microservices-rabbitmq` as custom transport layer for NestJS microservices.

## Requirements
- Docker & Docker Compose 
- Makefile
- Min Node version 20

## Installation

```bash
make setup
make start-http
make start-worker (in separate cli window) 
```

## Hit the endpoint
```bash
curl --location 'http://localhost:3000/signup' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "John W.",
    "email": "john.w@conti.com",
    "phone": "+123123123"
}'
```
