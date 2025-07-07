#!/bin/sh

echo "Esperando a que la base de datos esté lista..."

until nc -z catalog-db 3306; do
  sleep 1
done

echo "Base de datos lista, iniciando aplicación..."
exec "$@"
