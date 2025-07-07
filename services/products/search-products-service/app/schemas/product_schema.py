from pydantic import BaseModel
from typing import List, Optional

class ProductResponse(BaseModel):
    id: int
    name: str
    description: str
    price: float
    stock: int
    category: Optional[str]

    class Config:
        orm_mode = True

class ProductListResponse(BaseModel):
    products: List[ProductResponse]
