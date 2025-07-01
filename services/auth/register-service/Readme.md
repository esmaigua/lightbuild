# 📝 Register Service - Auth Domain

This microservice handles **user registration** within the `auth` domain of the Lightbuild e-commerce platform. It receives user credentials and creates new accounts securely using Spring Boot and JWT-based architecture.

---

## 🧰 Technologies Used

- **Language**: Java
- **Framework**: Spring Boot
- **Build Tool**: Maven
- **Security**: Spring Security + JWT
- **Database**: PostgreSQL
- **Containerization**: Docker
- **Testing**: JUnit
- **CI/CD**: GitHub Actions (optional integration)

---

## 🧱 Architectural Style

- **Architecture**: Layered Architecture (Controller, Service, Repository)
- **API Style**: RESTful API
- **Authentication**: Stateless JWT-based authentication

---

## 🧩 Design Patterns

- **DTO (Data Transfer Object)**: For encapsulating request/response data
- **Repository Pattern**: Isolates persistence logic using Spring Data JPA
- **Service Layer**: Encapsulates business logic and orchestration
- **Dependency Injection**: Managed by Spring Framework
- **Singleton**: For stateless components

---

## 🌐 API Endpoint

### 🔸 Register

**POST** `/auth/register`

**URL**:  
`http://54.87.88.210:8082/auth/register`

**Request Body**:
```json
{
  "email": "test@email.com",
  "password": "123456"
}
```

**Response**:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## 📁 Project Structure

```
register-service/
├── controller/         # REST controller
├── service/            # Business logic
├── model/              # Entity classes
├── repository/         # JPA data access layer
├── dto/                # Request/response objects
├── config/             # Spring Security configuration
├── resources/          # application.properties
└── Dockerfile          # Docker build instructions
```

---

## 🐳 Running Locally with Docker

```bash
docker build -t register-service .
docker run -p 8082:8082 --env-file .env register-service
```

> Ensure PostgreSQL is running and environment variables are configured properly.

---

## 📄 License

Part of the academic project **Lightbuild Commerce** for the Distributed Programming course.  
All rights reserved © 2025.
