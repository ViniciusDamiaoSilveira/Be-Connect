import { Bell, Users } from 'lucide-react'
import logo_mobile from '../../assets/Logo_Mobile.png'
import user from '../../assets/provisorio.png'

export default function HeaderMobile() {
    return (
       <div className='w-full h-24 flex justify-between items-center'>
            <img src={logo_mobile} className='w-9 ml-5'/>

            <div className='flex items-center gap-7'>
                <div className='flex items-center gap-4'>
                    <Users size={20} color='#6E6E6E'/>
                    <Bell size={20} color='#6E6E6E'/>
                </div>

                <img src={user} className='w-8 rounded-full mr-5'/>
            </div>
       </div>
    )
}