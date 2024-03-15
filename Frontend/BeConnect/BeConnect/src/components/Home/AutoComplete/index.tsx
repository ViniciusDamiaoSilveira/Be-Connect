import axios from "axios";
import { X } from 'lucide-react';
import { InputHTMLAttributes, useEffect, useState} from "react";
import { Oval } from "react-loader-spinner";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { useDebounce } from 'use-debounce';



interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string,
}

const tmdbURL = import.meta.env.VITE_TMDB_API
const bearer = import.meta.env.VITE_TMDB_BEARER
const imgURL = import.meta.env.VITE_TMDB_IMG


export default function AutoComplete({className, ...props} : InputProps) {

    const [text, setText] = useState('');
    const [last_text, setlastText] = useState('');
    const [text_delay] = useDebounce(text, 500);

    const [isLoading, setIsLoading] = useState(false)
    const [notFound, setNotFound] = useState(false)

    const [listMovies, setlistMovies] = useState<Array<any>>([])
    
    useEffect(() => {
        searchMovie()
        setlastText(text_delay)
        setIsLoading(false)
      }, [text_delay != last_text]);

    useEffect(() => {
        setlastText(text_delay)
    }, [text_delay])

    async function searchMovie() {
        try {
          setNotFound(false)
          const response = await axios.get(`${tmdbURL}/search/movie?query=${text_delay}&include_adult=false&language=pt-BR&page=1`, {
          headers: {
                'Authorization' : 'Bearer ' + bearer,
              }
            })
            
            if (response.data.results.length > 0) {
              setlistMovies(response.data.results)
            } else {
              setNotFound(true)
              setlistMovies(response.data.results)
            }
          
          
        } catch (error) {
          console.log(error);
        }
    }
  
    return (
        <div className="flex flex-col">
            <input
                className={twMerge('w-76 h-10 rounded-md bg-gray placeholder:text-light-gray pl-4 outline-none text-light-gray', className)}
                onBlur={() => {
                  setText('')
                }}
                onChange={(e) => {
                setText(e.target.value);
                setIsLoading(true)
                }}
                placeholder="Pesquisar..."
            />

            {listMovies.length > 0 && text.length > 0 && (
              <div className="w-90 h-76 flex flex-col gap-1 mt-11 z-50 absolute bg-gray overflow-y-scroll">
                  {listMovies.length > 0 && 
                    listMovies.map((movies) => (
                        <NavLink onClick={() => {
                          console.log(`/Movie/${movies.id}`)
                        }} 
                          to={'/Movie/' + movies.id} className="h-28 flex items-center gap-6 text-white cursor-pointer duration-300 hover:bg-half-gray"> 
                          <img src={imgURL + movies.poster_path} alt={movies.id} className="w-16 h-24"/>
                          {movies.title}
                        
                          </NavLink>
                    ))}
              </div>
            )}

            {notFound === true && text != '' && isLoading == false && (
                <div className="w-90 h-12 flex items-center gap-1 mt-11 z-50 absolute"> 
                <p className="text-light-gray ml-2 flex items-center gap-1"> <X size={20}/> Não encontrado </p>
                </div>
            )}

            {isLoading === true && text != '' && (
              <div className="w-90 h-20 rounded-md flex items-center absolute mt-11"> 
                <div className="flex ml-2 gap-2 mb-8">
                  <Oval
                    visible={true}
                    height="15"
                    width="15"
                    color="#FFFFFF"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    secondaryColor="#FFFFFF"
                  />
                  <span className="text-white text-sm mb-1"> Carregando... </span>    
                </div>
              </div>
            )}         
      </div>
    )
}