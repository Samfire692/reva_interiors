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
    <div className='p-6 bg-white/10'>
      
      <div className=''>
        <p className='uppercase text-white/40 text-sm' style={{letterSpacing:"3px", fontFamily:"Titan"}}>Services 01 - 0{services.length}</p>

        <h3 className='text-5xl max-w-xl py-5 text-white/90' style={{fontFamily:"sans-serif", letterSpacing:"1.8px"}}>
          A complete practice, held under a single roof.
        </h3>
      </div>

      <div behavior="" direction="" className="grid md:grid-cols-3 mt-3">
        {services.map((serv, index)=> (
           <div key={serv.id} className='w-fit h-55 grid inset-0 bg-black border border-slate-50/10 transition-all duration-500 mq'>
             <div className='p-5'>
               <p className='p-1 text-xs text-amber-400/80' style={{fontFamily:"Anton", letterSpacing:"2px"}}>0{index + 1}</p>

                <div className='p-1 mt-6'>
                 <p className='text-3xl text-white' style={{fontFamily:"Titan", letterSpacing:"2px"}}>{serv.title}</p>
                 <p className='mt-3 text-white/60 font-extralight text-sm' style={{fontFamily:"sans-serif", letterSpacing:"2px"}}>{serv.text}</p>
                </div>
             </div>
           </div>
        ))}
      </div>
    </div>
  )
}
