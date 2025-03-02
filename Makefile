setup:
	docker-compose up -d
	npm i

run-worker:
	npm run start:dev-worker

run-http:
	npm run start:dev
