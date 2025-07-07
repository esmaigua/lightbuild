# Search Products Service

Microservicio para buscar productos del catálogo por nombre y/o categoría.

## Endpoint
GET `/search-products?name=laptop&category=electrónica`

## Parámetros opcionales
- `name`: nombre del producto (parcial o completo)
- `category`: categoría a la que pertenece el producto

## Ejemplo de respuesta
```json
{
  "products": [
    {
      "id": 1,
      "name": "Laptop",
      "description": "Laptop i7 16GB RAM",
      "price": 1200.5,
      "stock": 15,
      "category": "electrónica"
    }
  ]
}
