# Delete Address Service

This microservice allows you to delete user addresses using a soft delete in the Lightbuild system.

## Stack
- Node.js (Express)
- MongoDB with authentication
- MVC architecture
- Swagger
- Docker & Docker Compose
- Testing with Jest + Supertest

## Installation
```bash
docker compose up --build
```

## Endpoint
DELETE /users/addresses

## Swagger
http://localhost:3008/api-docs

## JSON example
```json
{
"userId": "user123",
"addressId": "<address ID>"
}
```

## Test
```bash
npm run test