import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { register } from 'swiper/element/bundle';

const tmdbURL = import.meta.env.VITE_TMDB_API
const bearer = import.meta.env.VITE_TMDB_BEARER
const imgURL = import.meta.env.VITE_TMDB_IMG

register();

export default function ActiveCard() {

  const swiperRef = useRef(null);
    useEffect(() => {
      const swiperContainer = swiperRef.current;
      const params = {
        navigation: true,
        slidesPerView: 1,
        autoplay: {
          delay: 3500,
          disableOnInteraction: true,
        },
        injectStyles: [
          `
            .swiper-button-next,
            .swiper-button-prev {
              height: 15px;
              color: #FFFFFF;
              padding-top: 8px;
              padding-bottom: 10px;
              backdrop-filter: blur(10px);
            }
        `,
        ],
      };
  
      Object.assign(swiperContainer, params);
      swiperContainer.initialize();
    }, []);


  const [listMovies, setlistMovies] = useState<Array<any>>([])

  function randomPage() {
    return Math.floor(Math.random() * (35 - 1) + 1)
  }

  async function getListMovies() {
    try {
      let numero = randomPage()
      const response = await axios.get(`${tmdbURL}/movie/popular?language=pt-BR&page=${numero}`, {
      headers: {
            'Authorization' : 'Bearer ' + bearer,
          }
        })
      setlistMovies(response.data.results)
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getListMovies()    
  }, [])

    return(

         <div className="w-70 h-auto items-center rounded-lg ml-8 mb-5 shadow-lg"> 
          <swiper-container ref={swiperRef} init="false"> 
              {listMovies.length > 0 && 
                listMovies.map((movie) => 
            
                    <swiper-slide key={movie.id}>
                        <div
                        style={{ backgroundImage: `url(${imgURL + movie.poster_path})` }}
                        className='w-70 h-96 bg-cover bg-no-repeat rounded-lg flex justify-center cursor-pointer items-end'> 
                        </div>
                    </swiper-slide>
      
                )}
            </swiper-container>

         
        </div>
        
    )
}