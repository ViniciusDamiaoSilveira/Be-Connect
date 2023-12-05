from fastapi import FastAPI, Depends, status, HTTPException
from Files.database import engine, SessionLocal
from sqlalchemy.orm import Session
from typing import Annotated
import Files.models as models
import Files.crud as crud
import Files.schemas as sc


app = FastAPI()
models.Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
        
db_dependency = Annotated[Session, Depends(get_db)]

@app.post('/Create/Entertainment')
async def create_entertainment(db: db_dependency, entertainment: sc.EntertainmentBase):
    return await crud.create_entertainment(db=db, entertainment=entertainment)
    