import React from 'react'
import about from '../assets/about.jpg'
import video from "../assets/video.mp4"
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { BsFillPatchCheckFill } from "react-icons/bs";
function About() {
  return (
    <div className='w-[100vw] lg:h-[70vh] min-h-[50vh] flex flex-wrap items-center justify-center gap-2 mb-[30px]'>
      {/* for image */}
        <div className='lg:w-[40%] md:w-[80%] w-[100%] h-[100%] flex  items-center justify-center relative'>
            <img src={about} alt="" className='w-[80%] h-[90%] rounded-lg ' />
           <div className='max-w-[350px] mx-auto p-4 absolute top-[55%] left-[50%]'>
            <video src={video} className='w-full rounded-xl shadow-lg  border-2 border-white ' controls autoPlay loop/></div> 
        </div>



       				{/* for About info */}
				<div className='lg:w-[50%] md:w-[70%] w-[100%] h-[100%] flex items-start justify-center flex-col px-[35px] md:px-[80px] gap-4'>

					<div className='flex text-[18px] items-center gap-[14px] font-medium tracking-wide'>
						About Us 
						<TfiLayoutLineSolid className='w-[36px] h-[36px]'/>
					</div>

					<div className='md:text-[46px] text-[36px] font-bold leading-[1.2]'>
						We Drive Smarter Learning Outcomes
					</div>

					<div className='text-[15px] leading-relaxed max-w-[520px]'>
						We focus on delivering a seamless online learning experience that supports skill development, progress tracking, and meaningful instructor interaction.
					</div>

					{/* Glass Feature Card */}
					<div className='w-[100%] lg:w-[65%] mt-[25px] p-[24px] rounded-2xl bg-white/40 backdrop-blur-xl border border-white/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>

						<div className='flex items-center justify-between gap-[20px] flex-wrap'>
							<div className='flex items-center gap-[10px] px-[12px] py-[8px] rounded-xl border border-white/40 hover:shadow-md transition-all duration-300'>
								<BsFillPatchCheckFill className='w-[20px] h-[20px]'/>
								<span className='font-medium'>Simple & Flexible Learning</span>
							</div>

							<div className='flex items-center gap-[10px] px-[12px] py-[8px] rounded-xl border border-white/40 hover:shadow-md transition-all duration-300'>
								<BsFillPatchCheckFill className='w-[20px] h-[20px]'/>
								<span className='font-medium'>Professional Trainers</span>
							</div>
						</div>

						<div className='flex items-center justify-between gap-[20px] flex-wrap mt-[22px]'>
							<div className='flex items-center gap-[10px] px-[12px] py-[8px] rounded-xl border border-white/40 hover:shadow-md transition-all duration-300'>
								<BsFillPatchCheckFill className='w-[20px] h-[20px]'/>
								<span className='font-medium'>Proven Experience</span>
							</div>

							<div className='flex items-center gap-[10px] px-[12px] py-[8px] rounded-xl border border-white/40 hover:shadow-md transition-all duration-300'>
								<BsFillPatchCheckFill className='w-[20px] h-[20px]'/>
								<span className='font-medium'>Lifetime Access</span>
							</div>
						</div>

					</div>

				</div>

      
    </div>
  )
}

export default About
