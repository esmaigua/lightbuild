# 🏗️ Lightbuild Commerce

**Lightbuild** is a distributed e-commerce platform designed for the sale of lightweight construction materials. The system is composed of more than 30 microservices organized by business domains, integrating multiple programming languages, architectural styles, and modern tools to ensure scalability, maintainability, and efficient deployment.

---

## 📁 Project Structure

```bash
lightbuild-commerce/
├── .github/                  # CI/CD Workflows (GitHub Actions)
│   └── workflows/
├── terraform/                # Infrastructure as Code (IaC)
├── gateway/                  # Central API Gateway
├── frontend/                 # Client applications (web, mobile, desktop)
├── services/                 # Microservices organized by domain
├── shared/                   # Shared code (DTOs, constants, libraries)
├── observability/            # Metrics configuration and dashboards
├── scripts/                  # Deployment, test, and seed scripts
├── docs/                     # Technical documentation and Swagger specs
└── docker-compose.yml        # Local service orchestration
```

---

## 🔍 Key Technologies

| Category            | Tools / Technologies                                 |
|---------------------|------------------------------------------------------|
| Architecture        | Microservices, API Gateway, SOLID, KISS, DRY         |
| Backend             | Java (Spring), Python (FastAPI), Node.js, Go, Ruby   |
| Frontend            | React, Next.js, React Native, Electron               |
| Communication       | REST, gRPC, WebSockets, GraphQL, SOAP                |
| Databases           | PostgreSQL, MongoDB, DynamoDB, Redis, Elasticsearch |
| Observability       | Prometheus, Grafana, CloudWatch                      |
| CI/CD               | GitHub Actions (QA and Production)                   |
| Deployment          | AWS EC2, ALB, ASG, VPC, RDS                          |
| Infrastructure      | Terraform                                             |
| Security            | JWT, OAuth2, API Keys, CORS, Rate Limiting           |
| Machine Learning    | Recommender System (Python + Scikit-learn)           |

---

## 🛠 Architecture

LightBuild uses a **microservices architecture**, with each service focused on a specific domain. The current domains include:

- **Authentication Domain**: Manages user registration and login.
- **Users Domain**: Manages user profiles, including uploading profile images and retrieving personal information.
- **Cart Domain** (Future): Will manage shopping cart functionality.
- **Payments Domain** (Future): Will handle payment processing and gateway integration.

---

## 🔧 Core Features

1. **JWT Authentication**: Secure user registration, login, and token management.
2. **Product Catalog**: Display of eco-friendly products with detailed information and images.
3. **Shopping Cart**: Add, remove, and modify items in the cart.
4. **User Profile Management**: View and update personal information and profile pictures.
5. **Image Upload**: Upload and manage profile images with Amazon S3 integration.
6. **Event-Driven Architecture**: Kafka-based asynchronous communication between services.
7. **Microservices**: Modular services built with Spring Boot and Flask.
8. **Cloud-Native**: AWS-based infrastructure (RDS, S3, EC2) for high availability and resilience.

---

## 🐳 Running Services Locally

You can run each microservice locally from its folder using:

```bash
docker-compose up --build
```

> **Note**: Each service includes its own `Dockerfile` and `.env` configuration.

---

## 🌐 API Documentation

You can find each service’s Swagger specification at:

```bash
docs/swagger/
```

Or directly via `/docs` or `/swagger-ui` endpoints per service.

---

## 🛰️ Observability

The system includes monitoring and customizable dashboards with:

- **Prometheus**: Metrics collection
- **Grafana**: Dashboard visualization
- **AWS CloudWatch**: Logs and alerts in production

---

## 🔐 Security

- JWT-based authentication
- OAuth2-protected endpoints
- CORS and rate-limiting policies
- QA/Production workflow isolation

---

## 🤝 Contributions

1. Fork this repository.
2. Create a descriptive branch:
   ```bash
   git checkout -b feat/login-endpoint
   ```
3. Follow [conventional commits](https://www.conventionalcommits.org/).
4. Submit a Pull Request to `prod` or `qa`.

---

## 🧠 Credits

Project developed for the course **Distributed Programming**  
**Degree:** Information Systems  
**Supervisor:** Eng. Juan Pablo Guevara  
**Author:** Erick Saul Maigua Sarabino

---

## 📄 License

This project is academic in nature. All rights reserved © 2025.
