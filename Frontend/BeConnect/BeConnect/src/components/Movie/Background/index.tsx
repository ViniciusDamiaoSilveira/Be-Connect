import { Rating } from 'primereact/rating';
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Bookmark, Calendar, Clock } from 'lucide-react';
import Informations from '../Informations';
import Hotbar from '../Hotbar';

const tmdbURL = import.meta.env.VITE_TMDB_API
const bearer = import.meta.env.VITE_TMDB_BEARER
const imgURL = import.meta.env.VITE_TMDB_IMG


export default function Background() {

    const [movie, setMovie] = useState<any>()
    const [genres, setGenres] = useState!<[]>()
    let { id } = useParams()
    const [lastID, setLastID] = useState(id)

    

    async function getMovie() {
        try {
          const response = await axios.get(`${tmdbURL}/movie/${id}?language=pt-BR`, {
          headers: {
                'Authorization' : 'Bearer ' + bearer,
              }
            })
          
          setMovie(response.data)
          console.log(response.data);
          
          
        } catch (error) {
          console.log(error);
        }
      }
  
      //Usado para atualizar a pagina
      useEffect(() => {
        setTimeout(() => {
          getMovie()
          setLastID(id)
        }, 1000000);
      }, [id == lastID])

      useEffect(() => {
        setTimeout(() => {
          setGenres(movie.genres);
        }, 100);
        
      }, [movie])

    console.log(movie)
    console.log(genres);
    


    return (
        <div>
            {movie === undefined && (
              <div className='w-full h-100 relative'>
              <div
                style={{backgroundImage: `url(${imgURL + movie?.backdrop_path})`}} 
                className='w-screen h-full bg-cover bg-center bg-no-repeat blur opacity-40 -z-10 absolute'>
              </div>
            
              <div className="w-full h-full flex items-end">
                <div 
                    style={{ backgroundImage: `url(${imgURL + movie?.poster_path})` }}
                    className="w-56 h-85 mb-3 bg-cover bg-no-repeat ml-8">
                </div>

                <Informations 
                    title={''} 
                    value={0} 
                    overview={''} 
                    loading={true}
                    /> 

                </div>
              </div>
            )

            }
            {movie && (
              <div className='w-full h-100 relative'>
                <div
                  style={{backgroundImage: `url(${imgURL + movie?.backdrop_path})`}} 
                  className='w-screen h-full bg-cover bg-center bg-no-repeat blur opacity-40 -z-10 absolute'>
                </div>
              
                <div className="w-full h-full flex items-end">
                  <div 
                      style={{ backgroundImage: `url(${imgURL + movie?.poster_path})` }}
                      className="w-56 h-85 mb-3 bg-cover bg-no-repeat ml-8">
                  </div>

                  <Informations 
                      title={movie.title} 
                      value={5} 
                      overview={movie.overview} /> 

                </div>
              </div>
            )}
            
            {genres && (
              <Hotbar
                date={movie.release_date.split('-')[0]}
                genres={genres}
                runtime={movie.runtime}
              />
            )}
        </div>
    )
}