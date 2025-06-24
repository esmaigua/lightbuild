from pydantic import BaseModel
from typing import Optional
from uuid import UUID

class ProductCreate(BaseModel):
    name: str
    description: Optional[str]
    price: float
    image_url: Optional[str]
    category_id: Optional[str]

class ProductUpdate(ProductCreate):
    pass

class ProductOut(ProductCreate):
    id: UUID
