#!/bin/bash
yum update -y
amazon-linux-extras install docker -y
service docker start
usermod -a -G docker ec2-user

curl -L "https://github.com/docker/compose/releases/download/v2.20.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# Clonar tu proyecto (ajusta si es privado)
cd /home/ec2-user
git clone https://github.com/TU_USUARIO/lightbuild.git
cd lightbuild

# Levantar solo los servicios del dominio auth
docker compose -f docker-compose.qa.yml up -d authdb-postgres login-service register-service session-service tokens-service
