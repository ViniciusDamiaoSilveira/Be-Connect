from sqlalchemy import Column, BigInteger, Boolean, Integer, String, UUID, Float, Enum,ForeignKey
from database import Base

class Entertainment(Base):
    __tablename__ = 'entertainment'
    
    id = Column(UUID, primary_key=True, index=True)
    name = Column(String(255), unique=False, nullable=True)
    description = Column(String(700))
    released = Column(Integer)
    type = Column(String(50))
    numberEpisodes = Column(Integer, nullable=True) 
    numberArcs = Column(Integer, nullable=True)
    duration =  Column(String(20), nullable=True)
    difficulty = Column(Integer, nullable=True)
    numberSeasons = Column(Integer, nullable=True)
    numberChapters = Column(Integer, nullable=True)
    
class Type_Serie(Base):
    __tablename__ = 'serie_type'
    
    id = Column(UUID, primary_key=True, index=True)
    type = Column(String(50))    
    
    
class Serie(Base):
    __tablename__ = 'serie'
    
    id = Column(UUID, primary_key=True, index=True)
    id_entertainment = Column(UUID, ForeignKey(Entertainment.id))
    id_type = Column(UUID, ForeignKey(Type_Serie.id))
    numberEpisodes = Column(int)
    numberSeasons = Column(int)
    
    
class User(Base):
    __tablename__ = 'user'
    
    id = Column(UUID, primary_key=True, index=True)
    username = Column(String(255))
    email = Column(String(255))
    phone = Column(String(35), nullable=True)
    type = Column(Enum('adm', 'user'))
    
class Chapter(Base):
    __tablename__ = 'chapter'
    
    id = Column(UUID, primary_key=True, index=True)
    id_entertainment = Column(UUID, ForeignKey(Entertainment.id))
    name = Column(String(255))
    numberChapter = (int)
    
class Comments(Base):
    __tablename__ = 'comments'
    
    id = Column(UUID, primary_key=True, index=True)
    id_user = Column(UUID, ForeignKey(User.id))
    id_entertainment = Column(UUID, ForeignKey(Entertainment.id))
    comment = Column(String(700))
    date = Column(String(30))
    likes = Column(BigInteger)
    
class Episode(Base):
    __tablename__ = 'comments'
    
    id = Column(UUID, primary_key=True, index=True)
    id_serie