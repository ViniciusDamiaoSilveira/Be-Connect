from sqlalchemy import Column, Boolean, Integer, String, UUID, Float
from database import Base

class Entertainment(Base):
    __tablename__ = 'entertainment'
    
    id = Column(UUID, primary_key=True, index=True)
    name = Column(String(255), unique=False, nullable=True)
    description = Column(String(700), nullable=False)
    released = Column(Integer, nullable=False)
    type = Column(String(50), nullable=False)
    numberEpisodes = Column(Integer, nullable=True) 
    numberArcs = Column(Integer, nullable=True)
    duration =  Column(String(20), nullable=True)
    difficulty = Column(Integer, nullable=True)
    numberSeasons = Column(Integer, nullable=True)
    numberChapters = Column(Integer, nullable=True)
    
class User(Base):
    __tablename = 'user'