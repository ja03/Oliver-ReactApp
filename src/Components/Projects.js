import React from "react";
import Btn_lg from "./Btn-lg";
import project01 from '../assets/apollo.png'
import project02 from '../assets/mountains.png'
import project03 from '../assets/ergon.png'
import project04 from '../assets/raccoon.png'
const Projects = () =>{
    return(
        <div>
            <h2 className="text-xl mb-8">Some featured projects</h2>
            <div className="grid md:grid-rows-1 grid-rows-4 grid-cols-1 md:grid-cols-4 gap-1 max-h-fit mb-12">
                <div className="md:col-span-4 h-[36rem]  overflow-hidden group bg-center bg-cover bg-no-repeat relative cursor-pointer " style={{ backgroundImage:`url(${project01})` }}>
                    <div className="bg-cyan-800/70 flex flex-col items-center justify-center absolute h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white text-lg">Expolore More</h3>
                    </div>
                </div>
                <div className="md:col-span-2  md:h-[22rem] overflow-hidden group bg-center bg-cover  bg-no-repeat relative cursor-pointer" style={{ backgroundImage:`url(${project02})` }}>
                    <div className="bg-cyan-800/70 flex flex-col items-center justify-center absolute h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white text-lg">Expolore More</h3>
                    </div>
                </div>
                <div className="md:h-[22rem] overflow-hidden group bg-center bg-cover  bg-no-repeat relative cursor-pointer" style={{ backgroundImage:`url(${project03})` }}>
                    <div className="bg-cyan-800/70 flex flex-col items-center justify-center absolute h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white text-lg">Expolore More</h3>
                    </div>
                </div>
                <div className="md:h-[22rem] overflow-hidden group bg-center bg-cover  bg-no-repeat relative cursor-pointer" style={{ backgroundImage:`url(${project04})` }}>
                    <div className="bg-cyan-800/70 flex flex-col items-center justify-center absolute h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white text-lg">Expolore More</h3>
                    </div>
                </div>

            </div>
            <div className="w-full flex flex-col items-center justify-center gap-6">
                <p className="text-base">More of my treasure? You might not be able to handle it.</p>
                <Btn_lg btn_text='Expolre the Treasury'/>
            </div>
        </div>
    )
}
export default Projects