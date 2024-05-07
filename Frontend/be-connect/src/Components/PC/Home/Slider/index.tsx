// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import estreia from '../../../../assets/poster_garra_ferro.jpg'
import emAlta from '../../../../assets/poster_duna_2.jpg'
import populares from '../../../../assets/poster_oppenheimer.jpg'
import categories from '../../../../assets/categories.webp'
import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

// register Swiper custom elements
register();

const slide = 'h-44 ind rounded-md flex items-center bg-cover bg-no-repeat cursor-pointer text-white hover:text-yellow duration-300'

export default function Slider() {
    const swiperRef = useRef(null);

    useEffect(() => {
      const swiperContainer = swiperRef.current;
      const params = {
        navigation: true,
        spaceBetween: 20,
        slidesPerView: 2.6,
        injectStyles: [
            `
              .swiper-button-next,
              .swiper-button-prev {
                height: 18px;
                padding-top: 14px;
                border-radius: 100%;
                color: #FFBF15;
              }
          `,
          ],
      };
  
      Object.assign(swiperContainer, params);
      swiperContainer.initialize();
    }, []);

    
    return (
        
        <div className='h-fit mt-8 ml-8 mr-8 overflow-x-hidden'>
            <swiper-container ref={swiperRef} init="false">
                <swiper-slide>
                    <NavLink to={'/Filmes/Estreias'} className={slide}> 
                        <img src={estreia} className='opacity-50 rounded-md'/>
                        <span className='ml-10 font-bold lg:text-lg xl:text-xl absolute'> ESTREIAS </span>
                    </NavLink>
                </swiper-slide>

                <swiper-slide>
                    <NavLink to={'/Filmes/Em-alta'} className={slide}> 
                        <img src={emAlta} className='opacity-50 rounded-md'/>
                        <span className='ml-10 font-bold lg:text-lg xl:text-xl absolute'> EM ALTA </span>
                    </NavLink>
                </swiper-slide>

                <swiper-slide>
                    <NavLink to={'/Filmes/Populares'} className={slide}> 
                        <img src={populares} className='opacity-50 rounded-md'/>
                        <span className='ml-10 font-bold lg:text-lg xl:text-xl absolute'> POPULARES </span>
                    </NavLink>
                </swiper-slide>

                <swiper-slide>
                    <NavLink to={'/Filmes/Categorias'} className={slide}> 
                        <img src={categories} className='opacity-40 rounded-md'/>
                        <span className='ml-10 font-bold lg:text-lg xl:text-xl absolute'> CATEGORIAS </span>
                    </NavLink>
                </swiper-slide>
                
            </swiper-container>
        </div>
    )
}