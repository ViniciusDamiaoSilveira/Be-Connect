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


## Requisições GET - Types
@app.get('/Get/Types')
async def get_types(db: db_dependency):
    return await crud.get_types(db=db)


## Requisições POST - Entertainment
@app.post('/Post/Entertainment')
async def create_entertainment(db: db_dependency, entertainment: sc.EntertainmentBase):
    return await crud.create_entertainment(db=db, entertainment=entertainment)    

## Requisições POST - User
@app.post('/Post/User')
async def create_user(db: db_dependency, user: sc.UserBase):
    db_user = await crud.get_user(db=db, user=user)
    print(db_user)
    if db_user:
        raise HTTPException(status_code=400, detail='User already exists')
    return await crud.create_user(db=db, user=user)