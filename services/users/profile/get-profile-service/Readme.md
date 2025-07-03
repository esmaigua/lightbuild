# Get Profile Service

Microservicio para consultar un perfil de usuario en **Lightbuild** por su `userId`.

## 🛠️ Tecnologías
- Node.js (Express)
- MongoDB
- Swagger UI
- Docker + Docker Compose
- Pruebas con Jest + Supertest

## 🚀 Levantar el servicio

```bash
docker compose up --build

## Endpoint disponible en:

GET http://localhost:3002/users/profiles/:userId

Swagger: http://localhost:3002/api-docs

## 📘 Ejemplo

curl http://localhost:3002/users/profiles/test123

## 🧪 Ejecutar tests

npm test