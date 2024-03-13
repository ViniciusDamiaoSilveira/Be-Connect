import { Heart, Share2 } from 'lucide-react';
import { Rating } from 'primereact/rating';

interface PostProps {
    name: string,
    entertainment: string,
    type_entertainment: string,
    rating: number,
    text: string,
    likes: number
}

export default function Post( props : PostProps) {
    
    return (
        <div className="w-full h-fit flex flex-col bg-gray rounded-md">
            
            <div className="w-full h-10 flex justify-between">            
                <div className="w-fit h-10 flex gap-3 mt-5 ml-5"> 
                    <div className="w-10 h-10 bg-light-gray rounded-full"> </div>
                    <div className='flex flex-col gap-0'>
                        <span className="text-white font-bold"> Vinicius Silveira </span>
                        <span className="text-dark-white italic text-sm"> Filmes - Oppenheimer</span>
                    </div>
                </div>

                <Rating className='text-yellow gap-1 mr-5 mt-5' value={3} stars={3} readOnly cancel={false} />
            </div>
            
            <div className='mt-10 ml-5 mr-5 text-white font-normal'> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ad optio dolore sunt. Deserunt dolorum fuga, mollitia sunt 
                quas nesciunt vitae eligendi in eos, ipsam aspernatur reprehenderit, deleniti soluta magnam? Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Temporibus dolor tempore sunt iusto eius, maiores magnam officiis corrupti sed explicabo ullam alias pariatur velit, optio delectus ratione quos, praesentium non!
            </div>

            <div className='mt-5 ml-5 mb-3 flex justify-between'>
                <div className='text-white text-sm flex items-center gap-2 cursor-pointer hover:opacity-70 duration-300'>
                    <Heart size={19}/> 23mil
                </div>

                <Share2 size={19} className='mr-5 text-white cursor-pointer hover:opacity-70 duration-300'/>
            </div>

        </div>
    )
}