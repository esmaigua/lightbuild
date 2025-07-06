# create-address-service

Microservice for creating user addresses. Implemented with Node.js, Express, and MongoDB using an MVC architecture.

## 🚀 Installation

```bash
git clone <repository>
cd create-address-service
npm install
```

## ⚙️ Configuration

Create a `.env` file with:

```
PORT=3005
MONGODB_URI=mongodb://localhost:27019/create_address_db
JWT_SECRET=myultrasecretkey
```

## ▶️ Run

```bash
npm start
```

Or using Docker Compose:

```bash
docker-compose up --build
```

## 📫 Endpoint

```
POST /create-address
Authorization: Bearer <token>
```

## 📚 Documentation

Access Swagger in:
```
http://localhost:3005/api-docs
```

## 🧪 Test

```bash
npm run test
```