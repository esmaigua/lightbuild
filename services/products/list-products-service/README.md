# List Products Service

Microservicio para listar todos los productos activos del catálogo (no eliminados).

## Endpoint
GET `/list-products`

## Ejemplo de respuesta
```json
{
  "products": [
    {
      "id": 1,
      "name": "Laptop",
      "description": "Laptop i7 16GB RAM",
      "price": 1200.50,
      "stock": 15
    },
    {
      "id": 2,
      "name": "Mouse",
      "description": "Mouse inalámbrico",
      "price": 25.99,
      "stock": 100
    }
  ]
}