from pydantic import BaseModel
from typing import List

class CategoryResponse(BaseModel):
    id: int
    name: str
    description: str

    class Config:
        orm_mode = True

class CategoryListResponse(BaseModel):
    categories: List[CategoryResponse]