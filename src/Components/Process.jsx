import { ChartArea, Hammer, PenTool, Search, Sparkles } from 'lucide-react'
import React from 'react'

export const Process = () => {

  const process = ([
    {
      title:"DISCOVER",
      text:"Understanding the vision behind the space.",
      icon:<Search/>
    },

    {
      title:"DESIGN",
      text:"Turning ideas into considered spaces.",
      icon:<PenTool/>
    },

    {
      title:"EXECUTE",
      text:"Bringing every detail to life.",
      icon:<Hammer/>
    },

    {
      title:"REVEAL",
      text:"The finished space, ready to be experienced.",
      icon:<Sparkles/>
    }
  ])
  return (
    <div className='p-5'>
      <div>
         <p className='uppercase text-white/40 text-sm' style={{letterSpacing:"3px", fontFamily:"Titan"}}>Reva Process</p>

          <h3 className='md:text-5xl text-4xl max-w-2xl py-5 text-white/90' style={{fontFamily:"sans-serif", letterSpacing:"1.8px"}}>
          From vision to execution, every detail has its place.
         </h3>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 py-3'>
         {process.map((proc, index)=> (
           <div key={proc.id} className='p-4 text-center mq border-slate-200/5 border'>
             <span className='mb-4 bg-amber-300/10 text-amber-500/90 w-12 h-12 rounded-full flex justify-center items-center p-3 mx-auto'>{proc.icon}</span>

             <p className='p-1 mb-2 text-xs text-amber-400/80' style={{fontFamily:"Anton", letterSpacing:"2px"}}>0{index + 1}</p>

             <p className='text-2xl text-white' style={{fontFamily:"Titan", letterSpacing:"2px"}}>{proc.title}</p>
             <p className='mt-1 text-white/60 font-extralight text-sm' style={{fontFamily:"sans-serif", letterSpacing:"2px"}}>{proc.text}</p>
           </div>
         ))}
      </div>
    </div>
  )
}
