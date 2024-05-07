import { Plus } from "lucide-react";
import ActiveCard from "../../Components/PC/Home/ActiveCard";
import HeaderPC from "../../Components/PC/Header";
import Navigator from "../../Components/PC/Home/Navigator";
import Posts from "../../Components/PC/Post";
import Slider from "../../Components/PC/Home/Slider";

export default function Home() {
    return (
        <div className="w-full flex flex-col">
            <HeaderPC/>

            <div className="w-full flex">
                <Navigator/>
                <Slider/>
            </div>

            <div className="w-full h-full flex">
                <ActiveCard/>
                <div className="w-full flex flex-col">
                    <div className="w-full flex justify-between items-center mb-2"> 
                        <div className="flex items-center gap-2 text-white ml-8 hover:text-yellow duration-300 cursor-pointer mb-2"> 
                            <Plus className="w-5"/>
                            <span> Novo Post </span>
                        </div>

                        <div className="flex text-white gap-5 mr-8">
                            <span className="text-[#9A9A9A] cursor-pointer"> Amigos </span>
                            <span className="font-bold cursor-pointer"> Em alta </span>
                        </div>

                    </div>
                    
                    <div className="ml-8 mr-8">
                        <Posts/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}