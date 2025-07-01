# 🔐 Auth Domain - Lightbuild

This directory contains the **authentication and authorization** microservices of the Lightbuild e-commerce platform. These services handle user identity, credential verification, token lifecycle, and secure session management.

---

## 📚 Overview

| Microservice       | Description                                              |
|--------------------|----------------------------------------------------------|
| **login-service**   | Handles user login and credential validation.           |
| **register-service**| Manages new user registrations.                         |
| **session-service** | Controls active sessions and session expiry.            |
| **tokens-service**  | Generates, refreshes, and revokes JWT access tokens.    |

---

## ⚙️ Technical Stack

- **Language**: Java
- **Framework**: Spring Boot
- **Architecture**: RESTful API + JWT Authentication
- **Database**: PostgreSQL
- **Auth Mechanism**: JWT (JSON Web Tokens)
- **Communication**: HTTP (REST)

---

## 🧱 Folder Structure

```bash
auth/
├── login-service/
├── register-service/
├── session-service/
└── tokens-service/
```

Each service is a standalone Spring Boot application with its own:
- `Dockerfile`
- `.env` environment config
- `README.md`
- REST endpoints
- Swagger documentation

---

## 🔐 Security Details

- Passwords are stored using secure hashing (e.g., BCrypt).
- JWTs are signed and verified using a shared secret.
- Role-based access control can be implemented using token claims.
- Tokens support expiration, refresh, and revocation.

---

## 📦 Deployment

Each service is containerized with Docker and can be deployed independently:

```bash
cd auth/login-service
docker-compose up --build
```

All services are designed to be orchestrated through the main Docker Compose or deployed via Terraform to AWS EC2.

---

## 📄 License

Part of the academic project **Lightbuild Commerce** for the Distributed Programming course.  
All rights reserved © 2025.
