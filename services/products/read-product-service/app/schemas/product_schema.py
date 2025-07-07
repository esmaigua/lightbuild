from pydantic import BaseModel, Field

class ProductResponse(BaseModel):
    id: int
    name: str
    description: str
    price: float
    stock: int

    class Config:
        orm_mode = True