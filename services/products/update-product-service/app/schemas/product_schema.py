from pydantic import BaseModel, Field

class ProductUpdate(BaseModel):
    id: int
    name: str = Field(..., max_length=100)
    description: str = Field(..., max_length=255)
    price: float
    stock: int

class ProductResponse(ProductUpdate):
    class Config:
        orm_mode = True
