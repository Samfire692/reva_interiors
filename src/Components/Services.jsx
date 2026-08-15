import React from 'react'

export const Services = () => {

  const services = ([
    {
      title:"Interior Design",
      text:"Bespoke residential and commercial interiors of quiet intensity."
    },

    {
      title:"Space Planning",
      text:"Thoughtful layouts designed around movement, comfort, and purpose."
    },

     {
      title:"Custom Furniture",
      text:"Tailored pieces created to complement your space and identity."
    },

     {
      title:"Lighting Design",
      text:"Layered lighting that brings warmth, depth, and character."
    },

     {
      title:"Material & Colour",
      text:"Carefully selected finishes, textures, and tones for a refined feel."
    },

     {
      title:"Project Styling",
      text:"The final details that bring every interior together beautifully."
    },
  ])
  return (
    <div className='py-6'>
      
      <div>
        <p className='uppercase font-bold text-amber-300/80 text-lg text-center' style={{letterSpacing:"2px", fontFamily:"cursive"}}>Our Services</p>
      </div><br />

      <div behavior="" direction="" className="grid md:grid-cols-3 gap-3 mq p-3">
        {services.map((serv, index)=> (
           <div key={serv.id} className='rounded-2xl w-fit p-6 h-55 text-amber-400/70 grid inset-0 bg-black border border-transparent hover:rotate-6 transition-all duration-500'>
             <p className='p-1 text-sm text-amber-500 font-bold'>0{index + 1}</p>

             <div className='p-1'>
               <p className='text-2xl font-bold'>{serv.title}</p>
               <p className='mt-4'>{serv.text}</p>
             </div>
           </div>
        ))}
      </div>
    </div>
  )
}
