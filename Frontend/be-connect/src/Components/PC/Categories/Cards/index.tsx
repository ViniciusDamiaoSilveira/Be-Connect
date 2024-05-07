import imgAction from '../../../../assets/poster_gigantes_de_aco.jpg'
import imgAdventure from '../../../../assets/poster_jurassic_park.jpg'
import imgAnimation from '../../../../assets/poster_gato_de_botas2.jpg'
import imgComedy from '../../../../assets/poster_amor_a_toda_prova.jpg'
import imgCrime from '../../../../assets/poster_seven.jpg'
import imgDocumentary from '../../../../assets/poster_jonh_mcafee.jpg'
import imgDrama from '../../../../assets/poster_vidas_passadas.jpg'
import imgFamily from '../../../../assets/poster_wonka.jpg'
import imgFantasy from '../../../../assets/poster_senhor_dos_aneis.jpg'
import imgHistory from '../../../../assets/poster_oppenheimer.jpg'
import imgTerror from '../../../../assets/poster_evil_dead_rise.jpg'
import imgMusic from '../../../../assets/poster_la_la_land.jpg'
import imgMistery from '../../../../assets/poster_sexto_sentido.jpg'
import imgRomance from '../../../../assets/poster_simplesmente_acontece.jpg'
import imgFiction from '../../../../assets/poster_duna_2.jpg'
import imgTVMovie from '../../../../assets/poster_filme_teen_wolf.jpg'
import imgThriller from '../../../../assets/poster_ilha_do_medo.jpg'
import imgWar from '../../../../assets/poster_nada_de_novo.jpg'
import imgWestern from '../../../../assets/poster_tres_homens.jpg'
import { generatePath } from 'react-router-dom'

interface CardsProps {
    genre: string,
    name: string
}

export default function Cards({genre, name} : CardsProps) {
    let imgCard: string
    switch (genre) {
        case 'Ação':
            imgCard = imgAction
            break;
        case 'Aventura':
            imgCard = imgAdventure
            break;
        case 'Animação':
            imgCard = imgAnimation
            break;
        case 'Comédia':
            imgCard = imgComedy
            break;
        case 'Crime':
            imgCard = imgCrime
            break;
        case 'Documentário':
            imgCard = imgDocumentary
            break;
        case 'Drama':
            imgCard = imgDrama
            break;
        case 'Família':
            imgCard = imgFamily
            break;
        case 'Fantasia':
            imgCard = imgFantasy
            break;
        case 'História':
            imgCard = imgHistory
            break;
        case 'Terror':
            imgCard = imgTerror
            break;
        case 'Música':
            imgCard = imgMusic
            break;
        case 'Mistério':
            imgCard = imgMistery
            break;
        case 'Romance':
            imgCard = imgRomance
            break;
        case 'Ficção científica':
            imgCard = imgFiction
            break;
        case 'Cinema TV':
            imgCard = imgTVMovie
            break;
        case 'Thriller':
            imgCard = imgThriller
            break;
        case 'Guerra':
            imgCard = imgWar
            break;
        case 'Faroeste':
            imgCard = imgWestern
            break;
    }  

    return (
        <div className="w-64 h-82 flex items-center cursor-pointer text-white hover:text-yellow duration-300 ease-in-out">
            <img src={imgCard!} className='opacity-50' alt="genre"/>
            <h1 className='ml-5 text-2xl absolute font-bold'> {name} </h1>
        </div>
    )
}