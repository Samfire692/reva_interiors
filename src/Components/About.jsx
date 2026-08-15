import React from 'react'
import aboutImg from "../assets/pexels-taiyesalawu-36429335.jpg"

export const About = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row justify-evenly py-4 px-2'>
      <div className=''>
        <img src={aboutImg} alt="" className='lg:w-lg w-full h-[80vh] object-cover'/>
      </div>

      <div className='h-fit my-auto lg:w-xl p-2 flex flex-col gap-4'>
         <p className='uppercase font-bold text-white/80 text-sm' style={{letterSpacing:"2px"}}>About Reva Interiors</p>

         <h2 className='md:text-5xl font-bolder text-4xl uppercase' style={{lineHeight:"1.1em"}}>
           More than interiors. A reflection of you.
         </h2>

         <p className='text-lg'>At REVA Interiors, we believe great design goes beyond appearance. We create thoughtful, timeless spaces that reflect your personality, lifestyle, and vision. From refined residential interiors to sophisticated commercial spaces, our approach combines creativity, functionality, and attention to detail to create environments that feel truly yours.</p>
      </div>
    </div>
  )
}
