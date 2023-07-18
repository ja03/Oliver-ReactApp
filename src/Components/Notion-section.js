import React from "react";
import Btn_lg from "./Btn-lg";
import NotionTemp from '../assets/noition-emplates.png'

const Notion_section = () =>{
    return(
    
            <div className="flex flex-col gap-8 md:flex-row md:gap-0 items-center justify-between">
                <div className="w-full md:w-1/2 flex flex-col gap-6 order-2 md:order-1">
                    <p className=' text-base  '>
                    Oliver is passionate about Notion, and he has created a number of templates that help people to organize their lives and work more effectively. He also has a Notion course that teaches people how to use the platform to its full potential.
                    </p>
                    <p className="text-base">
                    Oliver offers his website visitors a free Notion template. He wants to help people to get started with Notion, and he believes that his templates can make a difference in people's lives.
                    </p>
                    <div className="flex flex-col md:flex-row  gap-8">
                        <Btn_lg btn_text='Notion Course' animate={false}/>
                        <Btn_lg btn_text='Get a free Template' fill={false}/>
                    </div>
                </div>
                <div className="flex flex-col items-center md:w-[36%] w-[80%] order-1 md:order-2">
                    <img src={NotionTemp} alt="" className="w-full h-auto" />
                </div>
            </div>
        
    )
}
export default Notion_section