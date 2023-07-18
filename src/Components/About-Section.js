import React from "react";
import Btn_lg from "./Btn-lg";
import Oliver from '../assets/main-oliver.png'
import MockUps from '../assets/mock-ups.png'

const About_Section = () =>{
    return(
        <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-8 md:gap-0 md:flex-row items-center justify-between">
                <div 
                    className="flex flex-col items-center md:w-[36%] w-[80%]"
                    data-aos="fade-right"
                    // data-aos-offset="300"
                    data-aos-delay="100"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                >
                    <img src={Oliver} alt="" className="w-full h-auto" />
                </div>
                <div 
                    className="flex flex-col justify-between items-start w-full md:w-1/2"
                    
                >
                    <h2 
                        className="text-xl font-semibold mb-6"
                        data-aos="fade-up"
                        // data-aos-offset="300"
                        data-aos-delay="200"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                    
                    >Hi I'm Oliver Oakenshield</h2>
                    <p 
                        className="text-base mb-6"
                        data-aos="fade-up"
                        // data-aos-offset="300"
                        data-aos-delay="200"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                    >I am a web developer with a Dwarven heart. I have the strength and resilience of my ancestors, and I use these qualities to create websites that are both beautiful and functional. I am not afraid to experiment with new technologies, and I am always looking for new ways to improve the user experience.</p>
                    <div
                        data-aos="fade-up"
                        // data-aos-offset="300"
                        data-aos-delay="50"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                    >
                        <Btn_lg btn_text="Learn More" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8 md:flex-row md:gap-0 items-center justify-between">
                <p 
                    className='w-full md:w-1/2 text-base order-2 md:order-1 '
                    data-aos="fade-up"
                    // data-aos-offset="300"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                >Oliver Oakenshield was a great warrior and leader, but his true Arkenstone was in designing and building websites. He had a diverse background in various roles, from blacksmith to dragon-slayer, but he always found himself drawn back to the world of web development. He was a master of Adobe XD, React, Tailwind CSS, NodeJS, and MongoDB, and he could create stunning websites with ease.   </p>
                <img 
                    src={MockUps} 
                    alt="" 
                    className="md:w-[36%] w-[80%] order-1 md:order-2 " 
                    data-aos="fade-left"
                    // data-aos-offset="300"
                    data-aos-delay="200"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                    />
            </div>
        </div>
    )
}
export default About_Section