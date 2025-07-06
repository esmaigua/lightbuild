# Assign Role Service

REST microservice for assigning roles to users in MongoDB.

## 📦Stack
- Node.js + Express
- MongoDB
- Docker + Docker Compose
- Swagger + Supertest

## 📂 Structure

assign-role-service/
├── app/
│ ├── controllers/
│ ├── db/
│ ├── models/
│ ├── routes/
│ ├── services/
│ └── app.js
├── swagger/
├── tests/
├── .env
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md


## 🚀 Start with Docker

```bash
docker-compose up --build
Access the service at: http://localhost:3009/assign-role

## 🧪 Tests

npm install
npm test
🔐 Endpoint
POST /assign-role

{
"userId": "123456",
"role": "admin"
}
📄 Swagger Documentation
File in swagger/swagger.json