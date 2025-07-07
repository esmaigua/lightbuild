FROM python:3.11-slim

WORKDIR /app
COPY . .

# Instalar netcat para esperar la base de datos
RUN apt-get update && apt-get install -y netcat-openbsd && apt-get clean

# Instalar dependencias de Python
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el script de espera
COPY wait-for-db.sh /wait-for-db.sh
RUN chmod +x /wait-for-db.sh

# Ajustar el PYTHONPATH para imports relativos
ENV PYTHONPATH=/app

# Ejecutar el microservicio cuando la DB esté lista
CMD ["/wait-for-db.sh", "uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "3014"]
