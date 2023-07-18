import React from 'react'
import Nav from './nav'
import about_img from '../assets/about-img-card.png'
import work_img from '../assets/work-img.png'
import notion_img from '../assets/Notion_app_logo.png'

const Hero = () =>{
    return(
        <div className=''>
            <Nav/>
            <div>
                <h1 
                className='text-4xl uppercase w-full'
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-delay="150"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                >creafting captivating experience</h1>
                
                <p 
                className='text-base capitalize'
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-delay="150"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                >With frontend finnes and inspired design!</p>

                {/* CARDS */}
                <div className='flex flex-col mt-12 items-center justify-center gap-4 lg:flex-row  text-white'>

                    <div 
                    className='lg:w-2/6 w-full  h-96 border-2 border-cl_1 
                    rounded-xl relative bg-cl_1 flex flex-col items-start
                    justify-between p-8 cursor-pointer overflow-hidden
                    '
                    data-aos="fade-up"
                    // data-aos-offset="300"
                    data-aos-delay="250"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                    >
                        <h3 className='text-xl tracking-wider'>About</h3>
                        <img src={about_img} alt="" className='w-80 opacity-50 absolute bottom-0 md:left-48 lg:left-[15%] transition-opacity hover:opacity-100 duration-300'/>
                        <ul className='list-disc flex flex-col items-start gap-1 relative z-10'>
                            <li className='font-bold tracking-wider'>My Stroy</li>
                            <li className='font-bold tracking-wider'>Education</li>
                            <li className='font-bold tracking-wider'>Skill Set</li>
                        </ul>
                    </div>

                    <div 
                    className='lg:w-2/6 w-full  h-96 border-2 border-cl_2 bg-cl_2 rounded-xl relative  flex flex-col items-start justify-between p-8 cursor-pointer overflow-hidden'
                    data-aos="fade-up"
                    // data-aos-offset="300"
                    data-aos-delay="350"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                    >
                    <h3 className='text-xl tracking-wider'>Things I've built</h3>
                        <img src={work_img} alt="" className='lg:w-96 opacity-50 absolute lg:bottom-5 md:-bottom-8 md:left-20 lg:left-5 transition-opacity hover:opacity-100 duration-300'/>
                        <ul className=' list-disc flex flex-col items-start gap-1'>
                            <li className='font-bold tracking-wider'>Where I've worked</li>
                            <li className='font-bold tracking-wider'>Featured Projects</li>
                        </ul>
                    </div>

                    <div 
                        className='lg:w-2/6 w-full  h-96  max-h-96 border-2 border-cl_3 bg-cl_3 rounded-xl relative
                        flex flex-col items-start justify-between p-8 cursor-pointer overflow-hidden'
                        data-aos="fade-up"
                        // data-aos-offset="300"
                        data-aos-delay="450"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                    >
                    <h3 className='text-xl tracking-wider relative z-10'>Notion Templets</h3>

                        <img src={notion_img} alt="" className='w-[100%] h-auto  opacity-30 absolute right-[2%] lg:top-[50px] xl:top-[0px] transition-opacity hover:opacity-50 duration-300 scale-[.5]'/>

                        <ul className=' list-disc flex flex-col items-start gap-1 relative z-10'>
                            <li className='font-bold tracking-wider'>How I started with notion</li>
                            <li className='font-bold tracking-wider'>Get a free Template</li>
                            <li className='font-bold tracking-wider'>Notion Course</li>
                        </ul>

                    </div>

                </div>
            </div>
        </div>
    )
} 
export default Hero