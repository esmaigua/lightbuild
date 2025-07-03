# Delete Profile Service

Microservicio para eliminar perfiles de usuario del sistema **Lightbuild** por `userId`.

## 🛠️ Tecnologías
- Node.js (Express)
- MongoDB
- Swagger
- Docker y Docker Compose
- Pruebas con Jest + Supertest

## 🚀 Ejecutar

```bash
docker compose up --build

## Endpoint:
DELETE http://localhost:3004/users/profiles/:userId

Swagger: http://localhost:3004/api-docs

## 🧪 Ejecutar tests

npm test
## ✅ Ejemplo

curl -X DELETE http://localhost:3004/users/profiles/test123