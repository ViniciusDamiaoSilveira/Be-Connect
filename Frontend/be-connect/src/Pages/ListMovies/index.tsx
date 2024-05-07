import { useEffect, useState } from "react";
import HeaderPC from "../../Components/PC/Header";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { ListFilter } from "lucide-react";
import { Rating } from "primereact/rating";
import Categories from "../../Components/PC/Categories";
import MoviesByCategory from "../../Components/PC/ListMovies/MoviesByCategory";
import Aside from "../../Components/PC/ListMovies/Aside";
import Teste from "../../Components/PC/Header/teste auto";

const tmdbURL = import.meta.env.VITE_TMDB_API
const bearer = import.meta.env.VITE_TMDB_BEARER
const imgURL = import.meta.env.VITE_TMDB_IMG

export default function ListMovies() {
    const [listMovies, setlistMovies] = useState<Array<any>>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [response, setResponse] = useState<any>()

    let { genre } = useParams()

    async function getListMovies() {
        try {

            if (genre === 'Estreias') {
                const response = await axios.get(`${tmdbURL}movie/upcoming?language=pt-BR&page=${currentPage}`, {
                    headers: {
                          'Authorization' : 'Bearer ' + bearer,
                        }
                    })
                setResponse(response)
                setlistMovies(response.data.results)
            }
            else if (genre === 'Populares') {
                const response = await axios.get(`${tmdbURL}movie/popular?language=pt-BR&page=${currentPage}`, {
                    headers: {
                          'Authorization' : 'Bearer ' + bearer,
                        }
                })
                setResponse(response)
                setlistMovies(response.data.results)
            }
            else if (genre === 'Em-alta') {
                const response = await axios.get(`${tmdbURL}movie/now_playing?language=pt-BR&page=${currentPage}`, {
                    headers: {
                          'Authorization' : 'Bearer ' + bearer,
                        }
                      })
                setResponse(response)
                setlistMovies(response.data.results)
            }
            else {
              if (genre != 'Categorias') {
                const response = await axios.get(`${tmdbURL}discover/movie?include_adult=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=${genre}`, {
                  headers: {
                    'Authorization' : 'Bearer ' + bearer,
                  }
                })

                setResponse(response)
                setlistMovies(response.data.results)
              }
            }
          
        } catch (error) {
          console.log(error);
        }
      }
    
      useEffect(() => {
        getListMovies()  
      }, [])

      useEffect(() => {
        getListMovies()
      }, [currentPage])

    return (
        <div>
            <HeaderPC/>
            <div>
               {
                genre === 'Categorias' && (
                  <Categories/>
                )
               }
               {
                genre != 'Categorias' && (
                  <div className="w-full flex flex-col mt-10">
                    <h1 className="ml-8 text-white font-bold text-3xl"> {genre} </h1>
                    <div>
                      <Aside />
                    </div>
                  </div>
                )
               }
            </div>
        </div>
    )
}

{/* <div className="w-full flex flex-col items-center mt-8">
                    <h1 className="text-3xl text-white font-bold"> {genre} </h1>
                    <div className="flex flex-wrap justify-center gap-10 mt-10">
                      {
                        listMovies.map((movie) => (
                          <MoviesByCategory img={`${imgURL}${movie?.poster_path}`} title={movie.title} rating={5}/>
                        ))
                      }
                    </div>
                  </div> */}