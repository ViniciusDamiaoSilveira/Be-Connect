import { Plus } from "lucide-react";
import Post from "../Post";

export default function Body() {
    return (
        <div className="w-9/12 h-full flex flex-col mt-8 ml-8">
            <div className="w-full h-16 flex justify-between items-center"> 
                
                <div className="flex items-center gap-2 text-white hover:text-yellow duration-300 cursor-pointer"> 
                    <Plus size={20}/>
                    <span> Novo Post </span>
                </div>

                <div className="flex text-white gap-5">
                    <span className="text-[#9A9A9A] cursor-pointer"> Amigos </span>
                    <span className="font-bold cursor-pointer"> Em alta </span>
                </div>

            </div>

            <Post/>
        </div>
    )
}