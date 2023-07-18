import React from "react";
import FootBg from '../assets/bg-layered-waves.png'
import Logo from '../assets/logo-hifi.png'
import behance from '../assets/social/behance.png';
import insta from '../assets/social/insta.png';
import mail from '../assets/social/mail.png';
import linkedIn from '../assets/social/linked-in.png';


const Foot = ()=>{
    return(
        <div 
            className="w-full h-72 flex flex-row items-end justify-between px-12 py-12 bg-cover bg-top"   
            style={{ backgroundImage:`url(${FootBg})` }}
            data-aos="fade-in"
            // data-aos-offset="300"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            >
            <div>
                <img 
                    src={Logo} 
                    alt="" 
                    className="w-1/2 md:w-3/4"
                    
                    />
            </div>
            <div 
                className="flex flex-col md:flex-row items-center justify-evenly gap-4"
                
                >
                <img 
                    src={behance} 
                    alt="" 
                    className="w-8 md:w-14  cursor-pointer"
                    
                    />
                <img 
                    src={linkedIn} 
                    alt="" 
                    className="w-8 md:w-14 cursor-pointer" 
                    
                    />
                <img 
                    src={insta} 
                    alt="" 
                    className="w-8 md:w-14 cursor-pointer" 
                    
                    />
                <img 
                    src={mail} 
                    alt="" 
                    className="w-8 md:w-14 cursor-pointer" 
                    
                    />

            </div>
        </div>
    )
}
export default Foot