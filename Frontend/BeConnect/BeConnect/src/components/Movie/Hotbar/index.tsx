import { Bookmark, Calendar, Clock } from "lucide-react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { MoonLoader } from "react-spinners";

interface HotbarProps {
    genres: any,
    runtime: number,
    date: string,
    loading: boolean
}

export default function Hotbar(props: HotbarProps) {
    return (
        <div className='w-full h-20 flex justify-between mt-3'> 
            {props.loading === true && (
                <div className='flex'>
                    <button className='w-56 h-14 flex justify-center gap-2 items-center text-white border-yellow border ml-8'> 
                        <MoonLoader color="#FFBF15" size={20} speedMultiplier={0.45}/>
                    </button>
                </div>
            )}


            {props.loading === false && (
                <div className='flex'>
                <button className='w-56 h-14 flex justify-center gap-2 items-center text-white border-yellow border ml-8'> 
                    <Bookmark className='h-5' strokeWidth={1.5} />
                    Adicionar a lista 
                </button>
                
                <div className='ml-8 px-4 h-9 flex items-center rounded-md border-white border text-white'> {props.genres[0].name} </div>
                {props.genres.length > 1 && (
                    <div className='ml-8 px-4 h-9 flex items-center rounded-md border-white border text-white'> {props.genres[1].name} </div>
                )}
            
                </div>
            )}
                    
            
            {props.loading === false && (
                <div className='flex'>   
                    <div className='w-fit h-9 flex gap-10'>
                        <div className='flex items-center gap-1 text-white'> 
                        <Clock strokeWidth={1.5} className='h-5'/>
                        {props.runtime} min 
                        </div>

                        <div className='flex items-center text-white gap-1 mr-8'>
                        <Calendar strokeWidth={1.5} className='h-5'/>
                        {props.date}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}