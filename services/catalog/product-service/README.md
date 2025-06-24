# 🛍️ Product Service - LightBuild

Este microservicio pertenece al dominio `catalog` del e-commerce **lightbuild**. Se encarga de la gestión de productos (crear, listar, ver, editar, eliminar), siendo fuente principal de datos para servicios como `inventory`, `order`, `reviews` y `recommendations`.

---

## 📦 Características

- Gestión completa de productos (CRUD)
- Arquitectura REST + CQRS
- Almacenamiento en PostgreSQL
- Caché de consultas frecuentes con Redis
- Seguridad mediante JWT y control de roles
- Documentación Swagger integrada
- Pruebas automáticas con Pytest
- CI/CD automatizado con GitHub Actions
- Imagen publicada en Docker Hub

---

## 🚀 Endpoints principales

| Método | Ruta            | Descripción                       | Roles permitidos |
|--------|------------------|------------------------------------|------------------|
| GET    | `/products/`     | Listar productos                   | Todos            |
| GET    | `/products/{id}` | Ver detalles de un producto        | Todos            |
| POST   | `/products/`     | Crear un nuevo producto            | admin, seller    |
| PUT    | `/products/{id}` | Actualizar producto existente      | admin, seller    |
| DELETE | `/products/{id}` | Eliminar/desactivar un producto    | admin            |

---

## 🐳 Ejecutar localmente

```bash
docker-compose up --build
La API estará disponible en: http://localhost:8000/docs

🧪 Probar el microservicio
bash
Copiar
Editar
pytest
O desde el contenedor:

bash
Copiar
Editar
docker exec -it product-service pytest
🔐 Seguridad
Este servicio valida los tokens JWT generados por el dominio auth. Para acceder a rutas protegidas (POST, PUT, DELETE) debes enviar:

http
Copiar
Editar
Authorization: Bearer <JWT_TOKEN>
🧰 Variables de entorno principales
POSTGRES_USER: Usuario de base de datos PostgreSQL

POSTGRES_PASSWORD: Contraseña

POSTGRES_DB: Nombre de la base

POSTGRES_HOST: Host PostgreSQL

REDIS_HOST: Host Redis

🧪 Commits convencionales
Este repositorio utiliza Conventional Commits:

feat: nueva funcionalidad

fix: corrección de errores

docs: cambios en la documentación

refactor: cambios en estructura o diseño

test: agregar o corregir pruebas

Ejemplo:

bash
Copiar
Editar
git commit -m "feat: add endpoint to update product"
🚀 Publicación automática (Docker Hub)
Este repositorio está integrado con GitHub Actions:

Cuando haces push a main, se ejecuta:

ci.yml: valida linting y tests

docker-publish.yml: construye y sube la imagen a DockerHub

Imagen disponible en:
👉 https://hub.docker.com/r/esmaigua/catalog-product-service

📁 Estructura del proyecto
bash
Copiar
Editar
product-service/
├── app/
│   ├── api/routes/         # Rutas de FastAPI
│   ├── core/               # Configuración y conexión a DB/Redis
│   ├── crud/               # Operaciones con base de datos
│   ├── models/             # Modelos SQLAlchemy
│   ├── schemas/            # Validaciones (Pydantic)
│   ├── services/           # Lógica de negocio
│   ├── deps.py             # Dependencias reutilizables (auth, Redis)
│   └── main.py             # Punto de entrada FastAPI
├── tests/                  # Pruebas automáticas (pytest)
├── Dockerfile              # Imagen del microservicio
├── docker-compose.yml      # Orquestación con PostgreSQL y Redis
├── requirements.txt        # Dependencias del proyecto
├── pytest.ini              # Configuración de pruebas
├── .github/workflows/      # CI/CD: GitHub Actions
│   ├── ci.yml
│   └── docker-publish.yml
├── .gitignore
└── README.md
📞 Contacto
Este microservicio es desarrollado por el equipo de LightBuild para el proyecto académico de Programación Distribuida.

yaml
Copiar
Editar

---

✅ Ya está listo para pegarlo. Si luego deseas que generemos el README en inglés o uno para otro microservicio, también puedo ayudarte. ¿Deseas ahora que lo subamos con un commit convencional como `docs: add full README for product-service`?





Tú dijiste:
Todo, todo en un archivo con markdown para copiar y pegar


ChatGPT Plus
Aquí tienes todo el contenido en formato Markdown completo y continuo, listo para copiar y pegar directamente en tu README.md:

markdown
Copiar
Editar
# 🛍️ Product Service - LightBuild

Este microservicio pertenece al dominio `catalog` del e-commerce **lightbuild**. Se encarga de la gestión de productos (crear, listar, ver, editar, eliminar), siendo fuente principal de datos para servicios como `inventory`, `order`, `reviews` y `recommendations`.

---

## 📦 Características

- Gestión completa de productos (CRUD)
- Arquitectura REST + CQRS
- Almacenamiento en PostgreSQL
- Caché de consultas frecuentes con Redis
- Seguridad mediante JWT y control de roles
- Documentación Swagger integrada
- Pruebas automáticas con Pytest
- CI/CD automatizado con GitHub Actions
- Imagen publicada en Docker Hub

---

## 🚀 Endpoints principales

| Método | Ruta            | Descripción                       | Roles permitidos |
|--------|------------------|------------------------------------|------------------|
| GET    | `/products/`     | Listar productos                   | Todos            |
| GET    | `/products/{id}` | Ver detalles de un producto        | Todos            |
| POST   | `/products/`     | Crear un nuevo producto            | admin, seller    |
| PUT    | `/products/{id}` | Actualizar producto existente      | admin, seller    |
| DELETE | `/products/{id}` | Eliminar/desactivar un producto    | admin            |

---

## 🐳 Ejecutar localmente

```bash
docker-compose up --build
La API estará disponible en: http://localhost:8000/docs

🧪 Probar el microservicio
bash
Copiar
Editar
pytest
O desde el contenedor:

bash
Copiar
Editar
docker exec -it product-service pytest
🔐 Seguridad
Este servicio valida los tokens JWT generados por el dominio auth. Para acceder a rutas protegidas (POST, PUT, DELETE) debes enviar:

http
Copiar
Editar
Authorization: Bearer <JWT_TOKEN>
🧰 Variables de entorno principales
POSTGRES_USER: Usuario de base de datos PostgreSQL

POSTGRES_PASSWORD: Contraseña

POSTGRES_DB: Nombre de la base

POSTGRES_HOST: Host PostgreSQL

REDIS_HOST: Host Redis

🧪 Commits convencionales
Este repositorio utiliza Conventional Commits:

feat: nueva funcionalidad

fix: corrección de errores

docs: cambios en la documentación

refactor: cambios en estructura o diseño

test: agregar o corregir pruebas

Ejemplo:

bash
Copiar
Editar
git commit -m "feat: add endpoint to update product"
🚀 Publicación automática (Docker Hub)
Este repositorio está integrado con GitHub Actions:

Cuando haces push a main, se ejecuta:

ci.yml: valida linting y tests

docker-publish.yml: construye y sube la imagen a DockerHub

Imagen disponible en:
👉 https://hub.docker.com/r/esmaigua/catalog-product-service

📁 Estructura del proyecto
bash
Copiar
Editar
product-service/
├── app/
│   ├── api/routes/         # Rutas de FastAPI
│   ├── core/               # Configuración y conexión a DB/Redis
│   ├── crud/               # Operaciones con base de datos
│   ├── models/             # Modelos SQLAlchemy
│   ├── schemas/            # Validaciones (Pydantic)
│   ├── services/           # Lógica de negocio
│   ├── deps.py             # Dependencias reutilizables (auth, Redis)
│   └── main.py             # Punto de entrada FastAPI
├── tests/                  # Pruebas automáticas (pytest)
├── Dockerfile              # Imagen del microservicio
├── docker-compose.yml      # Orquestación con PostgreSQL y Redis
├── requirements.txt        # Dependencias del proyecto
├── pytest.ini              # Configuración de pruebas
├── .github/workflows/      # CI/CD: GitHub Actions
│   ├── ci.yml
│   └── docker-publish.yml
├── .gitignore
└── README.md