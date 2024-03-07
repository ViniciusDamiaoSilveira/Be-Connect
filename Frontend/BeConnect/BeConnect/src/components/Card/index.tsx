// import iamgem1 from '../../assets/poster_evil_dead_rise.jpg'
// import iamgem2 from '../../assets/poster_elementos.jpg'
// import iamgem3 from '../../assets/poster_gato_de_botas2.jpg'
// import iamgem4 from '../../assets/poster_homem_aranha.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'

export default function Card() {

    const data = [
        {id: '1', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
        {id: '2', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png'},
        {id: '3', image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fletsenhance.io%2Fstatic%2F8f5e523ee6b2479e26ecc91b9c25261e%2F1015f%2FMainAfter.jpg&tbnid=tYmxDgFq4MrkJM&vet=12ahUKEwj7hrKcueCEAxWNCbkGHWyfChMQMygHegUIARCAAQ..i&imgrefurl=https%3A%2F%2Fletsenhance.io%2F&docid=-t22bY2ix3gHaM&w=1280&h=720&q=image&ved=2ahUKEwj7hrKcueCEAxWNCbkGHWyfChMQMygHegUIARCAAQ'},
        {id: '4', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fphotos%2Ftree-sunset-clouds-sky-silhouette-736885%2F&psig=AOvVaw182M6h6-AaHpbopB1wkUeI&ust=1709842341553000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKCugJ254IQDFQAAAAAdAAAAABAI'},
    ]

    return (
        <div className="w-full h-screen">
            <h1 className="title">Slider com React JS</h1>

            <Swiper
                slidesPerView={1}
                pagination={{clickable: true}}
                navigation
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img src={item.image} className='w-full h-72'/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

// <div className='h-20 w-32'>
//                 <img src={iamgem2} alt="" className='h-20 w-32 object-cover rounded-md'/>
//             </div>