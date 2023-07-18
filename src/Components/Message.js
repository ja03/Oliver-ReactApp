import React from "react";
import Btn_lg from "./Btn-lg";
const Message = ()=>{
    return(
        <div className="flex flex-col md:flex-row items-start justify-between gap-16 ">
            <p 
                className="text-base w-full md:w-1/2"
                data-aos="fade-up"
                // data-aos-offset="300"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
            >
                If you have any questions, comments, or business inquiries, I would be honored to hear from you. You can reach me by email, phone, or a raven would be  greate. I typically respond to inquiries within a day, but I will do my best to respond sooner
            </p>
            <form className="md:w-1/2 w-full flex flex-col items-start gap-4">
                <input 
                    type="text" 
                    required='required' 
                    placeholder="Your Name" 
                    className="border-2 border-cl_3 p-2 rounded-lg w-full text-cyan-900 focus:bg-cl_3/30 transition-colors duration-300 outline-0"  
                    data-aos="fade-up"
                    // data-aos-offset="300"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                    />
                <input 
                    type="email" 
                    required='required' 
                    placeholder="Your Email" 
                    className="border-2 border-cl_3 p-2 rounded-lg w-full text-cyan-900 focus:bg-cl_3/30 transition-colors duration-300 outline-0"   
                    data-aos="fade-up"
                    // data-aos-offset="300"
                    data-aos-delay="100"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                    />
                <textarea 
                    cols="30" 
                    rows="8" 
                    required='required' 
                    placeholder="Kindly state your message here" 
                    className="border-2 border-cl_3 p-2 rounded-lg w-full text-cyan-900 focus:bg-cl_3/30 transition-colors duration-300 outline-0" 
                    data-aos="fade-up"
                    // data-aos-offset="300"
                    data-aos-delay="150"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                    ></textarea>
                    <div 
                    className="w-full"
                    data-aos="fade-up"
                    // data-aos-offset="300"
                    data-aos-delay="200"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                    
                    >
                        <Btn_lg btn_text={"Send"} setWidth={'w-full '}/> 
                    </div>
            </form>
        </div>
    )
}
export default Message