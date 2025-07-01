# 🔐 Login Service - Auth Domain

This microservice handles **user authentication** by validating credentials and issuing JWT tokens. It is part of the `auth` domain of the Lightbuild e-commerce platform.

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

- **DTO (Data Transfer Object)**: For request/response encapsulation
- **Repository Pattern**: Abstracts database access logic
- **Service Layer**: Business logic separation
- **Singleton**: For components like JwtUtil
- **Factory (implicit)**: Spring Beans lifecycle management

---

## 🌐 API Endpoint

### 🔸 Login

**POST** `/auth/login`

**URL**:  
`http://54.87.88.210:8081/auth/login`

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
login-service/
├── controller/         # REST controller
├── service/            # Business logic
├── model/              # Entity classes
├── repository/         # Data access layer (JPA)
├── dto/                # Data Transfer Objects
├── security/           # JWT utils and config
├── resources/          # application.properties
└── Dockerfile          # Container build
```

---

## 🐳 Running Locally with Docker

```bash
docker build -t login-service .
docker run -p 8081:8081 --env-file .env login-service
```

> Make sure PostgreSQL is up and the environment variables are set properly.

---

## 📄 License

Part of the academic project **Lightbuild Commerce** for the Distributed Programming course.  
All rights reserved © 2025.
