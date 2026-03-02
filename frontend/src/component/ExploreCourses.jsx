import React from 'react'
import { SiViaplay } from "react-icons/si";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { LiaUikit } from "react-icons/lia";
import { MdAppShortcut } from "react-icons/md";
import { FaHackerrank } from "react-icons/fa";
import { AiFillOpenAI } from "react-icons/ai";
import { SiGoogledataproc } from "react-icons/si";
import { BsClipboardData } from "react-icons/bs";
import { SiOpenaigym } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
function ExploreCourses() {
  const navigate = useNavigate()
  return (
	<div className='w-[100vw] min-h-[50vh] lg:h-[50vh] flex flex-col lg:flex-row items-center justify-center gap-4 px-[30px]'>
      {/* left/top div */}
      <div className='w-[100%] lg:w-[350px] lg:h-[100%] h-[400px]  flex flex-col items-start justify-center gap-1 md:px-[40px]  px-[20px]'>

        <span className='text-[35px] font-semibold'>Explore</span>
        <span className='text-[35px] font-semibold'>Our Courses</span>
        <p className='text-[17px]'>Discover high-impact courses across technology, design, data, and AI, built by industry experts to help you master in-demand skills, gain hands-on experience, and achieve career-focused results.</p>
        <button className='px-[20px] py-[10px] border-2 bg-[black] border-white text-white rounded-[10px] text-[18px] font-light flex gap-2 mt-[40px] cursor-pointer' onClick={()=>navigate("/allcourses")}>Explore Courses <SiViaplay className='w-[30px] h-[30px] fill-white ' /></button>
      </div>

			{/* right/bottom div */}
			<div className='w-[720px] max-w-[90%] lg:h-[300px] md:min-h-[300px] flex items-center justify-center lg:gap-[60px] gap-[50px] flex-wrap mb-[50px] lg:mb-[0px]'>

				{/* Card 1 */}
				<div className='w-[100px] h-[130px] text-[13px] flex flex-col gap-3 text-center group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-105'>
					<div className='w-[100px] h-[90px] bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-white/30 dark:border-white/20 rounded-xl flex items-center justify-center shadow-xl hover:shadow-pink-400/40 transition-all'>
						<TbDeviceDesktopAnalytics className='w-[60px] h-[60px] text-pink-500 dark:text-pink-400'/>
					</div>
					<span className='text-black font-medium'>Web Dev</span>
				</div>

				{/* Card 2 */}
				<div className='w-[100px] h-[130px] text-[13px] flex flex-col gap-3 text-center group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-105'>
					<div className='w-[100px] h-[90px] bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-white/30 dark:border-white/20 rounded-xl flex items-center justify-center shadow-xl hover:shadow-emerald-400/40 transition-all'>
						<LiaUikit className='w-[60px] h-[60px] text-emerald-500 dark:text-emerald-400'/>
					</div>
					<span className='text-black font-medium'>UI/UX Designing</span>
				</div>

				{/* Card 3 */}
				<div className='w-[100px] h-[130px] text-[13px] flex flex-col gap-3 text-center group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-105'>
					<div className='w-[100px] h-[90px] bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-white/30 dark:border-white/20 rounded-xl flex items-center justify-center shadow-xl hover:shadow-orange-400/40 transition-all'>
						<MdAppShortcut className='w-[50px] h-[50px] text-orange-500 dark:text-orange-400'/>
					</div>
					<span className='text-black font-medium'>App Dev</span>
				</div>

				{/* Card 4 */}
				<div className='w-[100px] h-[130px] text-[13px] flex flex-col gap-3 text-center group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-105'>
					<div className='w-[100px] h-[90px] bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-white/30 dark:border-white/20 rounded-xl flex items-center justify-center shadow-xl hover:shadow-purple-400/40 transition-all'>
						<FaHackerrank className='w-[55px] h-[55px] text-purple-500 dark:text-purple-400'/>
					</div>
					<span className='text-black font-medium'>Ethical Hacking</span>
				</div>

				{/* Card 5 */}
				<div className='w-[100px] h-[130px] text-[13px] flex flex-col gap-3 text-center group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-105'>
					<div className='w-[100px] h-[90px] bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-white/30 dark:border-white/20 rounded-xl flex items-center justify-center shadow-xl hover:shadow-cyan-400/40 transition-all'>
						<AiFillOpenAI className='w-[60px] h-[60px] text-cyan-500 dark:text-cyan-400'/>
					</div>
					<span className='text-black font-medium'>AI / ML</span>
				</div>

				{/* Card 6 */}
				<div className='w-[100px] h-[130px] text-[13px] flex flex-col gap-3 text-center group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-105'>
					<div className='w-[100px] h-[90px] bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-white/30 dark:border-white/20 rounded-xl flex items-center justify-center shadow-xl hover:shadow-yellow-400/40 transition-all'>
						<SiGoogledataproc className='w-[50px] h-[50px] text-yellow-500 dark:text-yellow-400'/>
					</div>
					<span className='text-black font-medium'>Data Science</span>
				</div>

				{/* Card 7 */}
				<div className='w-[100px] h-[130px] text-[13px] flex flex-col gap-3 text-center group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-105'>
					<div className='w-[100px] h-[90px] bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-white/30 dark:border-white/20 rounded-xl flex items-center justify-center shadow-xl hover:shadow-rose-400/40 transition-all'>
						<BsClipboardData className='w-[50px] h-[50px] text-rose-500 dark:text-rose-400'/>
					</div>
					<span className='text-black font-medium'>Data Analytics</span>
				</div>

				{/* Card 8 */}
				<div className='w-[100px] h-[130px] text-[13px] flex flex-col gap-3 text-center group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-105'>
					<div className='w-[100px] h-[90px] bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-white/30 dark:border-white/20 rounded-xl flex items-center justify-center shadow-xl hover:shadow-indigo-400/40 transition-all'>
						<SiOpenaigym className='w-[50px] h-[50px] text-indigo-500 dark:text-indigo-400'/>
					</div>
					<span className='text-black font-medium'>AI Tools</span>
				</div>

			</div>

    </div>
  )
}

export default ExploreCourses
