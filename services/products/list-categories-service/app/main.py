from fastapi import FastAPI
from app.routes.category_route import router  # Asegúrate que este import sea correcto

app = FastAPI()
app.include_router(router)

# Si necesitas crear tablas:
from app.db.database import Base, engine
Base.metadata.create_all(bind=engine)