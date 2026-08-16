import React from 'react'
import CountUp from "countup";
import { ArrowLeft, ArrowRight } from 'lucide-react'
import heroPic  from '../assets/pexels-kirti-phadke-316475723-17947890.jpg'

export const Hero = () => {
  return (
    <div className='relative w-full h-screen'>
      <div className='absolute inset-0 bg-black/60 text-white flex flex-wrap items-end'>
       <div className='md:p-5 p-3 flex lg:flex-row flex-col justify-between w-full'>
         <div>
            <h2 className='md:text-7xl text-5xl uppercase font-bolder' style={{fontFamily:"Dancing Script", letterSpacing:"3px"}}>Reva Interiors</h2>
            <p className='md:text-md text-sm mt-1 font-medium' style={{letterSpacing:"1.5px"}}>Transforming spaces into beautiful, functional interiors.</p>
            <div className='mt-4 flex gap-2'>
             <button className='border p-2.5 font-bold rounded-lg hover:bg-black/70 hover:border-black/70 focus:bg-black/70 focus:border-black/70 transition-all duration-500 flex gap-2 group'>Book an Appointment <ArrowRight className='my-auto -rotate-30 group-hover:rotate-0 group-focus:rotate-0 transition-all' size={20}/> </button>
             <button className='p-2.5 font-bold rounded-lg max-w-40 bg-amber-300/30'>Contact Us</button>
            </div>
         </div>

         <div className='lg:my-auto mt-3 p-3 rounded-xl' style={{backdropFilter:"blur(20px)"}}>
            <div>
                <h4 className='uppercase font-bold text-white/60 text-center' style={{fontFamily:"Dancing Script", letterSpacing:"3px"}}>Residential • Commercial • Bespoke Interiors</h4>
                <div className='w-full bg-white/60 h-1 rounded-full mt-1.5'></div>
            </div>
         </div>
       </div>
      </div>

      <div className=''>
         <img src={heroPic} alt="Interior design" loading='lazy' className='w-full object-cover h-screen'/>
      </div>
    </div>
  )
}
