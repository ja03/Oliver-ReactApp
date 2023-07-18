import React from 'react'
import logoHiFi from '../assets/logo-hifi.png';

const Nav = () =>{
    return(
        <div 
            className=' py-6 flex justify-between items-center max-w-full mb-6'
            data-aos="fade-up"
            // data-aos-offset="300"
            data-aos-delay="50"
            data-aos-duration="300"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
    
        
        >
            <div className=' border-2 bg-black rounded-3xl w-20'>
                <img src={logoHiFi} alt="" className='w-full'/>
            </div>
            
            <ul className='flex flex-col items-center gap-1.5 cursor-pointer'>
                <li className='w-[32px] bg-black h-[3.75px] rounded-sm'></li>
                <li className='w-[32px] bg-black h-[3.75px] rounded-sm'></li>
                <li className='w-[32px] bg-black h-[3.75px] rounded-sm'></li>
            </ul>
        </div>
    )
}
    

export default Nav