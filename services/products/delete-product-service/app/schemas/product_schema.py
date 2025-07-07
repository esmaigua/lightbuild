from pydantic import BaseModel

class ProductDeleteResponse(BaseModel):
    id: int
    deleted: bool