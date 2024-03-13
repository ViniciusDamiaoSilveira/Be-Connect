// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import estreia from '../../assets/poster_garra_ferro.jpg'
import emAlta from '../../assets/poster_duna_2.jpg'
import populares from '../../assets/poster_oppenheimer.jpg'
import { useEffect, useRef } from 'react';

// register Swiper custom elements
register();

const slide = 'h-44 ind rounded-md flex items-center bg-cover bg-no-repeat cursor-pointer text-white hover:text-yellow duration-300'

export default function Slider() {
    const swiperRef = useRef(null);

    // slides-per-view="2.6" navigation={true} space-between={20} init={true}

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
        // <div className='w-9/12 mt-8 ml-8 lg:w-9/12 xl:w-[75%] overflow-x-hidden'> 
        //     <swiper-container ref={swiperRef} init="false"> 
        //         <swiper-slide class="blue-slide">Slide 1</swiper-slide>
        //         <swiper-slide class="yellow-slide">Slide 2</swiper-slide>
        //         <swiper-slide class="green-slide">Slide 3</swiper-slide>
        //     </swiper-container>
        // </div>

        <div className='w-9/12 mt-8 ml-8 lg:w-9/12 z-10 xl:w-[75%] overflow-x-hidden'>
            <swiper-container ref={swiperRef} init="false">
                <swiper-slide>
                    <div className={slide}> 
                        <img src={estreia} className='opacity-50 rounded-md'/>
                        <span className='ml-10 font-bold lg:text-lg xl:text-xl absolute'> ESTREIAS </span>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div className={slide}> 
                        <img src={emAlta} className='opacity-50 rounded-md'/>
                        <span className='ml-10 font-bold lg:text-lg xl:text-xl absolute'> EM ALTA </span>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div className={slide}> 
                        <img src={populares} className='opacity-50 rounded-md'/>
                        <span className='ml-10 font-bold lg:text-lg xl:text-xl absolute'> POPULARES </span>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div className={slide}> 
                        <img src={populares} className='opacity-40 rounded-md'/>
                        <span className='ml-10 font-bold lg:text-lg xl:text-xl absolute'> POPULARES </span>
                    </div>
                </swiper-slide>
                
            </swiper-container>
        </div>
    )
}