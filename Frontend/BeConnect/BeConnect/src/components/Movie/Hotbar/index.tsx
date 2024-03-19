import { Bookmark, Calendar, Clock } from "lucide-react";

interface HotbarProps {
    genres: any,
    runtime: number,
    date: string
}

export default function Hotbar({genres, runtime, date}: HotbarProps) {
    return (
        <div className="flex">
            <div className='w-full h-20 flex justify-between mt-3'> 
                
                <div className='flex'>
                    <button className='w-56 h-14 flex justify-center gap-2 items-center text-white border-yellow border-2 ml-8'> 
                        <Bookmark className='h-5' size={18} strokeWidth={1.5} />
                        Adicionar a lista 
                    </button>
                    
                    <div className='ml-8 px-4 h-9 flex items-center rounded-md border-white border text-white'> {genres[0].name} </div>

                    <div className='ml-8 px-4 h-9 flex items-center rounded-md border-white border text-white'> {genres[0].name} / {genres[1].name} </div>
                
                </div>
                        
                <div className='flex'>   
                    <div className='w-fit h-9 flex gap-10'>
                        <div className='flex items-center gap-1 text-white'> 
                        <Clock strokeWidth={1.5} className='h-5'/>
                        {runtime} min 
                        </div>

                        <div className='flex items-center text-white gap-1 mr-8'>
                        <Calendar strokeWidth={1.5} className='h-5'/>
                        {date}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}