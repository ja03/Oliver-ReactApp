import React from "react";
import Btn_lg from "./Btn-lg";
import apolloBg from '../assets/Apollo-Poster-bg.png'
import apolloGirl from '../assets/girl-img.png'
import project02 from '../assets/mountains.png'
import project03 from '../assets/ergon.png'
import project04 from '../assets/raccon.png'
import arrowIcon from '../assets/arrow-icon.png'
const Projects = () =>{
    return(
        <div>
            <h2 
                className="text-xl mb-8"
                data-aos="fade-up"
                // data-aos-offset="300"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
            >Some featured projects</h2>
            <div className="grid lg:grid-rows-1 grid-rows-4 grid-cols-1 lg:grid-cols-4  max-h-fit mb-12">

                <div 
                    className="lg:col-span-4 group bg-cover bg-no-repeat relative bg-center md:bg-top" 
                    style={{ backgroundImage:`url(${apolloBg})` }}
                    data-aos="fade-up"
                    // data-aos-offset="300"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                    >

                        <img src={arrowIcon}  
                            className="border-2 border-white rounded-full bg-white py-3 px-2 -rotate-45 absolute bottom-[4%] right-[4%]
                                        transition-transform duration-300 hover:scale-125 cursor-pointer
                        "/>

                    <div className="flex flex-col items-center p-10 gap-16">
                        <h2 className="w-full text-2xl text-center text-blue-300">Apollo Music</h2>
                        <div className="flex flex-row items-center gap-0 md:gap-8">
                            <div className="w-1/2  flex-col items-end hidden md:flex ">
                                <img src={apolloGirl} className="w-96 h-auto" />
                            </div>
                            <div className="w-full  md:w-1/2 text-white">
                                <h3 className="text-base font-semibold text-blue-300 capitalize">the coolest Cloud audio player!</h3>
                                <p className="text-base">
                                Unlock a world of music with us.<br />Enjoy ad-free music with Apollo just hit play and groove on.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div 
                    className="lg:col-span-2 minh-[26rem]  group bg-center bg-cover  bg-no-repeat relative" 
                    style={{ backgroundImage:`url(${project02})` }}
                    data-aos="fade-up"
                    // data-aos-offset="300"
                    data-aos-delay="100"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                    >
                        <img src={arrowIcon}  
                            className="border-2 border-white rounded-full bg-white py-3 px-2 -rotate-45 absolute bottom-[4%] right-[4%]
                                        transition-transform duration-300 hover:scale-125 cursor-pointer
                        "/>
                        <div className="flex flex-col items-center justify-center h-full w-full">
                            <div className="flex flex-col items-center justify-center text-white text-center gap-4">
                                <div className="text-2xl h-1/2 flex flex-col justify-end">
                                    <h3>Mountains</h3>
                                </div>
                                <p className="text-base border-t-2 border-white pt-4 tracking-wide">Expolr the beuty o fthe mountains</p>
                            </div>
                        </div>
                </div>

                <div 
                    className="min-h-[26rem] bg-center bg-cover  bg-no-repeat relative " 
                    style={{ backgroundImage:`url(${project03})` }}
                    data-aos="fade-up"
                    // data-aos-offset="300"
                    data-aos-delay="200"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                    >
                        <img src={arrowIcon}  
                            className="border-2 border-white rounded-full bg-white py-3 px-2 -rotate-45 absolute bottom-[4%] right-[4%]
                                        transition-transform duration-300 hover:scale-125 cursor-pointer
                        "/>
                        <div className="flex flex-col items-center justify-center h-full w-full">
                            <div className="flex flex-col items-center justify-center text-white text-center gap-4 h-full">
                                <div className="text-2xl h-1/2 flex flex-col justify-end">
                                    <h3>Ergon</h3>
                                </div>
                                <p className="text-base border-t-2 border-white pt-4 tracking-wide h-1/2">Build your  workspace</p>
                            </div>
                        </div>
                </div>

                <div 
                    className=" min-h-[26rem] bg-center md:bg-top bg-cover  bg-no-repeat relative " 
                    style={{ backgroundImage:`url(${project04})` }}
                    data-aos="fade-up"
                    // data-aos-offset="300"
                    data-aos-delay="300"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                    >
                        <img src={arrowIcon}  
                            className="border-2 border-white rounded-full bg-white py-3 px-2 -rotate-45 absolute bottom-[4%] right-[4%]
                                        transition-transform duration-300 hover:scale-125 cursor-pointer
                        "/>
                        <div className="flex flex-col items-center justify-center h-full w-full">
                            <div className="flex flex-col items-center justify-center text-white text-center gap-4">
                                <div className="text-2xl h-1/2 flex flex-col justify-end">
                                    <h3>Raccoon</h3>
                                </div>
                                <p className="text-base border-t-2 border-white pt-4">Build your vision</p>
                            </div>
                        </div>
                </div>

            </div>
            <div className="w-full flex flex-col items-center justify-center gap-6">
                <p 
                    className="text-base"
                    data-aos="fade-up"
                    // data-aos-offset="300"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                    >More of my treasure? You might not be able to handle it.</p>
                <div 
                    data-aos="fade-up"
                    // data-aos-offset="300"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                >
                    <Btn_lg btn_text='Expolre the Treasury'/>
                </div>
            </div>
        </div>
    )
}
export default Projects