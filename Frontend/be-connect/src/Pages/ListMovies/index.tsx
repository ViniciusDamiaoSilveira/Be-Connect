import HeaderPC from "../../Components/PC/Header";
import { NavLink, useParams } from "react-router-dom";
import Categories from "../../Components/PC/Categories";
import Aside from "../../Components/PC/ListMovies/Aside";
import { SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import './index.css'
import ReactPaginate from "react-paginate";
import { Rating } from "primereact/rating";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import logo from '../../assets/poster_amor_a_toda_prova.jpg' 

const tmdbURL = import.meta.env.VITE_TMDB_API
const bearer = import.meta.env.VITE_TMDB_BEARER
const imgURL = import.meta.env.VITE_TMDB_IMG

export default function ListMovies() {

    let year: number = new Date().getFullYear()
    let month: number = new Date().getMonth()

    let { type } = useParams()

    const [id_genre, setIdGenre] = useState('')
    const [totalPages, setTotalPages] = useState(500)
    const [currentPage, setCurrentPage] = useState(1)
    const [listMovies, setListMovies] = useState<any[]>([])

    const loading = []

    for (let i = 0; i < 20; i++) {
      loading.push(
        <SkeletonTheme baseColor="#3A3A3A" highlightColor="#3F3F3F" width={'14.3rem'} height={'21rem'}>
          <Skeleton/>
        </SkeletonTheme>
      )
    }

    function handlePageClick(event: Event) {
      setListMovies([])
      getMoviesByType(type!, event.selected + 1, id_genre)
      setCurrentPage(event.selected + 1)
    }

    async function getMoviesByType(type: string, page: number, genre?: string) {
      try {
        let response = {}  
       

        if (type == 'Absolute-Cinema') {
          if (genre != null && genre != '0') {
            response = await axios.get(`${tmdbURL}discover/movie?language=pt-BR&page=${page}&sort_by=vote_average.desc&vote_average.gte=8&vote_count.gte=5000&with_genres=${genre}`, {
              headers: {
                    'Authorization' : 'Bearer ' + bearer,
                  }
                })
          } else {
            response = await axios.get(`${tmdbURL}discover/movie?&language=pt-BR&page=${page}&sort_by=vote_average.desc&vote_average.gte=8&vote_count.gte=5000&`, {
              headers: {
                    'Authorization' : 'Bearer ' + bearer,
                  }
                })
          }
        } else if (type == 'Populares') {
          if (genre != null && genre != '0') {
            response = await axios.get(`${tmdbURL}discover/movie?language=pt-BR&page=${page}&sort_by=popularity.desc&vote_count.gte=3000&with_genres=${genre}`, {
              headers: {
                    'Authorization' : 'Bearer ' + bearer,
                  }
                })
                
          } else {
            response = await axios.get(`${tmdbURL}discover/movie?&language=pt-BR&page=${page}&sort_by=popularity.desc&vote_count.gte=3000&`, {
              headers: {
                    'Authorization' : 'Bearer ' + bearer,
                  }
                })
          }
          
        } else {
          if (genre != null && genre != '0') {
            response = await axios.get(`${tmdbURL}discover/movie?language=pt-BR&page=${page}&sort_by=popularity.desc&primary_release_date.gte=${year}-${month - 1}-01&with_genres=${genre}`, {
              headers: {
                    'Authorization' : 'Bearer ' + bearer,
                  }
                })
                
          } else {
            response = await axios.get(`${tmdbURL}discover/movie?&language=pt-BR&page=${page}&sort_by=popularity.desc&primary_release_date.gte=${year}-${month - 1}-01&`, {
              headers: {
                    'Authorization' : 'Bearer ' + bearer,
                  }
                })
          }
        }

          if (response.data.total_pages > 500) {
            setTotalPages(500)
          } else {
            setTotalPages(response.data.total_pages)
            console.log(response.data.total_pages);
          }
            
          setListMovies(response.data.results)
          console.log(response);
              
              
        
      } catch (error) {
        console.log(error);
      }
  }

    const updateGenre = (id: string) => {
      setIdGenre(id)
      setListMovies([])
      setCurrentPage(1)
      getMoviesByType(type!, 1, id)
    }

    useEffect(() => {
      getMoviesByType(type!, 1)
    }, [])



    return (
        <div>
            <HeaderPC/>
            <div>
               {
                type === 'Categorias' && (
                  <Categories/>
                )
               }

               {
                type != 'Categorias' && (
                  <div>
                    <div className="w-full flex flex-col mt-10 mb-10">
                    <h1 className="ml-8 text-white font-bold text-3xl"> {type?.replace('-', ' ')} </h1>
                  </div>
               
                <div className="flex">
                    
                    { listMovies.length > 0 && (
                        <div className="w-10/12 flex flex-wrap gap-10 ml-8 mb-12">
                          {
                            listMovies.map((movie) => (
                              <NavLink to={`/Filme/${movie.id}`} className="flex flex-col duration-300 hover:opacity-75 cursor-pointer">
                                  <img 
                                  src={`${imgURL + movie.poster_path}`} 
                                  alt={'Movie Poster'} 
                                  className="w-58 h-85"
                                  />
                                  <h1 className="w-52 text-white text-xl font-bold mt-3 mb-2"> {movie.title} </h1>
                                  <div className="w-full flex justify-between">
                                    <div className="flex gap-2">
                                        <Rating className='text-yellow rating-movie gap-1.5' value={1} stars={1} readOnly cancel={false} />
                                        <span className="text-white text-lg"> 5,0 </span>
                                    </div>

                                    <span className="text-white text-lg"> {movie.release_date.split('-')[0]}</span>
                                  </div>
                              </NavLink>
                            )) }
                        </div>
                    )}
                   

                    {
                      listMovies.length < 1 && (
                        <div className="w-10/12 flex flex-wrap gap-10 ml-8 mb-12">
                          {loading}
                        </div>
                      )
                    }

                    <div className="mr-8">
                      <Aside handleGenre={updateGenre}/>
                    </div>
                </div>


                <div className="w-full flex justify-center">
                    <ReactPaginate className="flex gap-4 text-white decoration-white"
                      previousLabel={'Anterior'}
                      nextLabel={'Próximo'}
                      breakLabel={'...'}
                      pageCount={totalPages}
                      pageRangeDisplayed={2}
                      onPageChange={handlePageClick}
                      containerClassName={'pagination'}
                      pageClassName={'page-item'}
                      pageLinkClassName={'page-link'}
                      previousClassName={'previous'}
                      previousLinkClassName={'previous-link'}
                      nextClassName={'next'}
                      nextLinkClassName={'next-link'}
                      breakClassName={'break'}
                      breakLinkClassName={'break-link'}
                      activeClassName={'active-link'}
                      renderOnZeroPageCount={null}
                      forcePage={currentPage - 1}
                       >
                      </ReactPaginate>
                </div>

                  </div>
                )}
            </div>
        </div>
    )
  }


