# Create Profile Service

Este microservicio permite crear un nuevo perfil de usuario en el sistema **Lightbuild**.

## 🧪 Stack
- Node.js (Express)
- MongoDB
- Arquitectura MVC
- Swagger
- Docker & Docker Compose
- GitHub Actions (pendiente)
- Pruebas con Jest + Supertest

## 📦 Instalación local

```bash
docker compose up --build

## 📤 Endpoint

API disponible en: http://localhost:3001/users/profiles
Swagger: http://localhost:3001/api-docs

POST /users/profiles
Crea un nuevo perfil.

Body JSON
json
{
  "userId": "uuid123",
  "fullName": "Jane Smith",
  "phone": "0999999999",
  "birthDate": "1990-05-20",
  "gender": "Female"
}