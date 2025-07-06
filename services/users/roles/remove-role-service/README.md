# Remove Role Service

REST microservice to remove user roles using their ID.

## 🧩 Technologies
- Node.js + Express
- MongoDB
- Docker + Docker Compose
- Swagger + Supertest

## 🧱 Structure

remove-role-service/
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
Go to: http://localhost:3011/remove-role/:id

## 🧪 Testing

npm install
npm test
📄 Documentation
Available at swagger/swagger.json