# List Roles Service

REST microservice to list all roles registered in MongoDB.

## 🧩 Technologies
- Node.js + Express
- MongoDB
- Docker + Docker Compose
- Swagger + Supertest

## 🧱 Structure

list-roles-service/
├── app/
│ ├── controllers/
│ ├── db/
│ ├── models/
│ ├── routes/
│ ├── services/
│ └── app.js
├── swagger/
├── tests/
├── Dockerfile
├── docker-compose.yml
├── .env
├── package.json
└── README.md

## 🚀 Run

```bash
docker-compose up --build
Access the endpoint at: http://localhost:3010/list-roles

## 🧪 Tests

npm install
npm test
## 🔍 Documentation
Available at swagger/swagger.json