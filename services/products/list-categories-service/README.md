# List Categories Service

Microservicio para listar todas las categorías disponibles del catálogo.

## Endpoint
GET `/list-categories`

## Ejemplo de respuesta
```json
{
  "categories": [
    {
      "id": 1,
      "name": "Electrónica",
      "description": "Dispositivos electrónicos y gadgets."
    },
    {
      "id": 2,
      "name": "Ropa",
      "description": "Vestimenta y accesorios."
    }
  ]
}
