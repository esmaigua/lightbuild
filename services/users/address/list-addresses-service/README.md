# List Addresses Service

This microservice allows you to list a user's addresses in the **Lightbuild** system.

## Stack
- Node.js (Express)
- MongoDB
- MVC Architecture
- Swagger
- Docker & Docker Compose
- GitHub Actions (pending)
- Testing with Jest + Supertest

## Local Installation
```bash
docker compose up --build
```

## Endpoint
API available at: http://localhost:3006/users/addresses

Swagger: http://localhost:3006/api-docs

GET /users/addresses?userId=testuser
Lists the user's active addresses.