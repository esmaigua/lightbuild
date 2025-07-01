# 🔑 Tokens Service - Auth Domain

This microservice is responsible for **JWT token generation and validation**.  
It is a core component of the `auth` domain within the Lightbuild e-commerce platform, enabling secure stateless authentication mechanisms.

---

## 🧰 Technologies Used

- **Language**: Java
- **Framework**: Spring Boot
- **Build Tool**: Maven
- **Security**: JWT (JSON Web Tokens)
- **Database**: PostgreSQL (optional for token tracking)
- **Containerization**: Docker
- **Testing**: JUnit
- **CI/CD**: GitHub Actions (optional integration)

---

## 🧱 Architectural Style

- **Architecture**: Layered Architecture (Controller, Service, Repository)
- **API Style**: RESTful API
- **Authentication**: Stateless using JWT

---

## 🧩 Design Patterns

- **DTO (Data Transfer Object)**: Encapsulate request/response
- **Service Layer**: Isolate business logic
- **Repository Pattern**: (if storing token metadata)
- **Utility Class**: JwtUtil handles encoding and validation logic
- **Singleton**: Reused components through Spring context

---

## 🌐 API Endpoints

### 🔸 Generate Token

**POST** `/auth/token/generate`  
**URL**: `http://54.87.88.210:8084/auth/token/generate`

**Request**:
```json
{
  "email": "test@email.com"
}
```

**Response**:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

### 🔸 Validate Token

**POST** `/auth/token/validate`  
**URL**: `http://54.87.88.210:8084/auth/token/validate`

**Request**:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response**:
```json
{
  "valid": true
}
```

---

## 📁 Project Structure

```
tokens-service/
├── controller/         # REST endpoints
├── service/            # Business logic
├── model/              # Token entity (if persisted)
├── repository/         # JPA interfaces
├── dto/                # Request/response DTOs
├── util/               # JWT utility functions
├── config/             # Security configuration
└── Dockerfile          # Docker build instructions
```

---

## 🐳 Running Locally with Docker

```bash
docker build -t tokens-service .
docker run -p 8084:8084 --env-file .env tokens-service
```

> Ensure PostgreSQL is accessible if the service stores token metadata.

---

## 📄 License

Part of the academic project **Lightbuild Commerce** for the Distributed Programming course.  
All rights reserved © 2025.
