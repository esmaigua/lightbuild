# Update Profile Service

Microservicio para actualizar datos de perfil de usuario por `userId` en el sistema **Lightbuild**.

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
PUT http://localhost:3003/users/profiles/:userId

Swagger: http://localhost:3003/api-docs

## 📘 Body esperado
json

{
  "fullName": "Nuevo Nombre",
  "phone": "0987654321",
  "birthDate": "1992-04-15",
  "gender": "Otro"
}
## 🧪 Test

npm test