from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import commands, queries

app = FastAPI(title="Product Service - LightBuild")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(commands.router, prefix="/products", tags=["Commands"])
app.include_router(queries.router, prefix="/products", tags=["Queries"])