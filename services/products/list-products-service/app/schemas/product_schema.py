from pydantic import BaseModel
from typing import List

class ProductResponse(BaseModel):
    id: int
    name: str
    description: str
    price: float
    stock: int

    class Config:
        orm_mode = True

class ProductListResponse(BaseModel):
    products: List[ProductResponse]