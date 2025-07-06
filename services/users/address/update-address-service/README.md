# Update Address Service

This microservice allows you to update user addresses in the **Lightbuild** system. If the address is marked as primary (`is_primary=true`), publishing an event to EventBridge is simulated.

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
PUT /users/addresses

## Swagger
http://localhost:3007/api-docs

## JSON example
```json
{
"_id": "<address ID>",
"userId": "user123",
"city": "Quito",
"is_primary": true
}
```

## Test
```bash
npm run test