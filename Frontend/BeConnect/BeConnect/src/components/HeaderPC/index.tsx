import { Bell, Search, Users } from 'lucide-react'
import logo from '../../assets/Logo.png'
import provisorio from '../../assets/provisorio.png'
import Input from '../Input'
import { twMerge } from 'tailwind-merge'

const hover = 'cursor-pointer transition duration-200 hover:opacity-70'
const flex = 'w-fit flex items-center'

export default function HeaderPC() {
    return (
        <div className='h-28 w-full flex items-center justify-between'> 
            
            <div className={twMerge('gap-60', flex)}>
                <img src={logo} className='h-12 ml-8 cursor-pointer'/>

                <div className='w-90 flex items-center bg-gray rounded-md'>
                    <Input placeholder='Pesquisar...'/>
                    <Search size={20} color='#6E6E6E' className='ml-3'/>
                </div>
            </div>

            <div className={twMerge('gap-8', flex)}>
                <div className={twMerge('gap-4', flex)}>
                    <Users size={22} color='#6E6E6E' className={hover}/>
                    <Bell size={22} color='#6E6E6E' className={hover}/>
                </div>

                <img src={provisorio}  className={twMerge('h-10 rounded-full mr-8', hover)}/>
            </div>

        </div>
    )
}