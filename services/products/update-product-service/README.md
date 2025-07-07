# README.md
# Update Product Service

Microservicio para actualizar los datos de un producto existente.

## Endpoint
PUT `/update-product`

## Ejemplo de payload
```json
{
  "id": 1,
  "name": "Laptop Pro",
  "description": "Laptop i7 32GB RAM",
  "price": 1500.00,
  "stock": 10
}
