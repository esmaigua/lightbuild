from pydantic import BaseModel, Field

class ProductCreate(BaseModel):
    name: str = Field(..., max_length=100)
    description: str = Field(..., max_length=255)
    price: float
    stock: int = 0

class ProductResponse(ProductCreate):
    id: int

    class Config:
        orm_mode = True