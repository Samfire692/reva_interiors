import React from 'react'
import aboutImg from "../assets/pexels-taiyesalawu-36429335.jpg"

export const About = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row justify-evenly py-4 px-2'>
      <div className=''>
        <img src={aboutImg} alt="" className='lg:w-lg w-full max-h-[80vh] object-cover'/>
      </div>

      <div className='h-fit my-auto lg:w-xl p-2'>
         <p className='uppercase text-white/40 text-sm' style={{letterSpacing:"3px", fontFamily:"Titan"}}>About Reva Interiors</p>

         <h3 className='md:text-5xl text-4xl max-w-2xl py-5 text-white/90' style={{fontFamily:"sans-serif", letterSpacing:"1.8px"}}>
           More than interiors. A reflection of you.
         </h3>

         <p className='text-lg'>At REVA Interiors, we believe great design goes beyond appearance. We create thoughtful, timeless spaces that reflect your personality, lifestyle, and vision. From refined residential interiors to sophisticated commercial spaces, our approach combines creativity, functionality, and attention to detail to create environments that feel truly yours.</p>
      </div>
    </div>
  )
}
