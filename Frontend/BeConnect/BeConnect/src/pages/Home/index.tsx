import Aside from "../../components/Aside";
import HeaderMobile from "../../components/HeaderMobile";
import HeaderPC from "../../components/HeaderPC";
import Posts from "../../components/Body";
import Slider from "../../components/Slider";


export default function Home() {
    return(
        <div className="">
            <div className="lg:hidden"> 
                <HeaderMobile/> 
            </div>
            <div className="w-full hidden xl:flex lg:flex-col"> 
                <HeaderPC/> 
                <div className="w-full h-fit flex overflow-hidden"> 
                    <Aside/>
                    <div className="w-full"> 
                        <Slider/>
                        <Posts/>
                    </div>
                </div>
            </div>
            
        </div>
    ) 
}