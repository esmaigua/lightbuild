from sqlalchemy import Column, Integer, String, Float, Boolean
from app.db.database import Base

class Product(Base):
    __tablename__ = "products"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), unique=True, nullable=False)
    description = Column(String(255))
    price = Column(Float, nullable=False)
    stock = Column(Integer, default=0)
    is_deleted = Column(Boolean, default=False)
    category = Column(String(100))
