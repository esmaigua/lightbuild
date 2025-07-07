# README.md
# Delete Product Service

Microservicio para eliminar (soft delete) un producto existente del catálogo.

## Endpoint
DELETE `/delete-product?product_id=1`

## Parámetro requerido
- `product_id`: ID del producto

## Ejemplo de respuesta
```json
{
  "id": 1,
  "deleted": true
}