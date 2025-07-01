# 🧩 Services - Lightbuild Microservices Directory

This directory contains all the microservices that make up the Lightbuild distributed e-commerce platform.  
Each service is grouped by business domain and built independently, following modern architectural practices, language diversity, and dedicated data storage.

---

## 📚 Domain Overview

| Domain         | Microservices                           | Language            | Architecture         | Recommended DB        |
|----------------|------------------------------------------|---------------------|-----------------------|------------------------|
| **Auth**        | login, register, session, tokens         | Java (Spring Boot)  | REST + JWT            | PostgreSQL             |
| **Users**       | profile, address, roles                  | Node.js (Express)   | MVC                   | MongoDB                |
| **Catalog**     | product, category, inventory             | Python (FastAPI)    | REST + CQRS           | PostgreSQL + Redis     |
| **Orders**      | order, status, order-tracking            | Go (Gin)            | Event-Driven          | MySQL                  |
| **Payments**    | stripe-gateway, invoice, validation      | Java                | REST / Webhook        | DynamoDB               |
| **Shipping**    | delivery, tracking, logistics            | Python              | Hexagonal             | MongoDB                |
| **Notifications**| email, sms, push                        | Node.js (NestJS)    | WebSocket             | Redis                  |
| **Reviews**     | comments, ratings                        | Ruby (Rails API)    | REST                  | SQLite                 |
| **Admin**       | dashboard, reports, metrics              | Java                | Clean Architecture    | PostgreSQL             |

---

## 🛠 Common Characteristics

- Each microservice is independently deployable and containerized with Docker.
- Services communicate via REST, WebSockets, or asynchronous events (Kafka).
- Security is applied through JWT tokens and OAuth2 where applicable.
- CI/CD pipelines are configured individually via GitHub Actions.

---

## 🧱 Folder Structure Example

```bash
services/
├── auth/
│   ├── login-service/
│   ├── register-service/
│   └── ...
├── users/
│   ├── profile-service/
│   ├── address-service/
│   └── ...
├── catalog/
│   ├── product-service/
│   └── ...
...
```

Each microservice contains:

- `Dockerfile` and `.env`
- `README.md` with usage instructions
- REST or WebSocket endpoints
- Swagger/OpenAPI documentation
- Unit tests and CI/CD workflow

---

## 🔐 Secure by Design

- Domain isolation: Each service handles its own data and responsibilities.
- JWT authentication and authorization implemented in gateway and services.
- Rate limiting and API Gateway protections enforced at runtime.

---

## 📦 Deployment Strategy

- Services are deployed on AWS EC2 instances using Docker Compose.
- Infrastructure managed via Terraform modules (network, compute, DB, observability).
- Load balancers and auto-scaling configured per domain (QA and Production environments).

---

## 📄 License

This codebase is part of the academic project **Lightbuild Commerce**, developed for the Distributed Programming course.  
All rights reserved © 2025.
