from pydantic import BaseModel, Field

class CategoryCreate(BaseModel):
    name: str = Field(..., max_length=100)
    description: str = Field(None, max_length=255)

class CategoryResponse(CategoryCreate):
    id: int

    class Config:
        orm_mode = True
