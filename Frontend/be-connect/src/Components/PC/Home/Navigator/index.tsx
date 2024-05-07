import { BookOpen, Clapperboard, Gamepad, Tv2 } from "lucide-react"
import { NavLink } from "react-router-dom"

const CustomDiv = 'h-full w-3 bg-gray transition-all duration-300 current:bg-yellow'

const CustomNav = 'h-11 w-full flex gap-6 items-center text-white transition-all duration-300 current:bg-half-gray current:text-yellow '


export default function Navigator() {
    return (
        <div className="w-102 h-70 flex flex-col justify-center gap-3 bg-gray rounded-lg ml-8 mt-8">
            <NavLink to={'/'} className={CustomNav}> 
                <NavLink to={'/'} className={CustomDiv}></NavLink>
                <Clapperboard className="ml-5 h-5"/>
                <span className="text-base font-semibold"> Filmes </span> 
            </NavLink>

            <NavLink to={'/Series'} className={CustomNav}> 
                <NavLink to={'/Series'} className={CustomDiv}></NavLink>
                <Tv2 className="ml-5 h-5"/>
                <span className="font-semibold"> Séries </span>
            </NavLink>

            <NavLink to={'/Jogos'} className={CustomNav}> 
                <NavLink to={'/Jogos'} className={CustomDiv}></NavLink>
                <Gamepad className="ml-5 h-5"/>
                <span className="font-semibold"> Jogos </span> 
            </NavLink>

            <NavLink to={'/Livros'} className={CustomNav}> 
                <NavLink to={'/Livros'} className={CustomDiv}></NavLink>
                <BookOpen className="ml-5 h-5"/>
                <span className="font-semibold"> Livros </span> 
            </NavLink>
        </div>
    )
}