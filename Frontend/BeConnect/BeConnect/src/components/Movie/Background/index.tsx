import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Informations from '../Informations';
import Hotbar from '../Hotbar';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Post from "../../Home/Post";
import { ListFilter } from "lucide-react";

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
        }, 0);
      }, [id == lastID])

      useEffect(() => {
        setTimeout(() => {
          setGenres(movie.genres);
        }, 0);
        
      }, [movie])

    console.log(movie)
    console.log(genres);
    


    return (
        <div>
            {movie === undefined && (
              <div className='w-full h-100 relative'>
              <div className='w-screen h-full bg-gray -z-10 absolute'></div>
            
              <div className="w-full h-full flex items-end">
                
                  <div className="w-58 h-83 mb-4 ml-8">
                    <SkeletonTheme baseColor="#3A3A3A" highlightColor="#3F3F3F" width={'100%'} height={'100%'}>
                      <Skeleton/>
                    </SkeletonTheme>
                  </div>
                

                  <Informations 
                    title={''} 
                    value={0} 
                    overview={''} 
                    loading={true}
                  />

                </div>
              </div>
            )}

            {movie === undefined && (
              <Hotbar
                date={''}
                genres={[]}
                runtime={0}
                loading={true}
              />
            )}


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
                      overview={movie.overview} 
                      loading={false}
                      /> 

                </div>
              </div>
            )}
            
            {genres && (
              <Hotbar
                date={movie.release_date.split('-')[0]}
                genres={genres}
                runtime={movie.runtime}
                loading={false}
              />
            )}

            {movie && (
              <div className="w-full h-20 flex justify-between items-end"> 
                <h1 className="ml-8 text-white text-3xl font-bold"> Críticas </h1>
                <p className="mr-8 flex items-center gap-1 text-light-gray cursor-pointer duration-300 hover:text-[#9A9A9A]"> 
                    <ListFilter strokeWidth={1.5} className="h-4"/> 
                    Filtrar
                </p>
              </div>
            )}

            {movie && (
              <div className="ml-8 mr-8 mt-5 mb-8">
                <Post/>
              </div>
            )}
            
              
        </div>
    )
}