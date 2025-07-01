# 🗝️ Session Service - Auth Domain

This microservice handles **user session creation and validation**. It is part of the `auth` domain of the Lightbuild e-commerce platform, responsible for maintaining secure stateless sessions using JWT tokens.

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
- **Session Management**: Token-based (JWT), stateless

---

## 🧩 Design Patterns

- **DTO (Data Transfer Object)**: For request payloads
- **Repository Pattern**: Spring Data JPA abstraction
- **Service Layer**: Encapsulation of business logic
- **Dependency Injection**: Spring-managed beans
- **Builder**: (implicitly via Spring's configuration)

---

## 🌐 API Endpoints

### 🔸 Create Session

**POST** `/auth/session/create`  
**URL**: `http://54.87.88.210:8083/auth/session/create`

**Request Body**:
```json
{
  "email": "usuario@example.com",
  "token": "123456abcdef"
}
```

---

### 🔸 Validate Session

**POST** `/auth/session/validate`  
**URL**: `http://54.87.88.210:8083/auth/session/validate`

**Options**:
1. Via Query:
```
/auth/session/validate?token=123456abcdef
```
2. Via JSON:
```json
{
  "token": "123456abcdef"
}
```

---

## 📁 Project Structure

```
session-service/
├── controller/         # REST endpoints
├── service/            # Session logic
├── model/              # Entity classes
├── repository/         # JPA repository
├── dto/                # Request DTOs
├── config/             # Spring Security setup
├── resources/          # application.properties
└── Dockerfile          # Container instructions
```

---

## 🐳 Running Locally with Docker

```bash
docker build -t session-service .
docker run -p 8083:8083 --env-file .env session-service
```

> Ensure the PostgreSQL database is configured and accessible with proper credentials.

---

## 📄 License

Part of the academic project **Lightbuild Commerce** for the Distributed Programming course.  
All rights reserved © 2025.
