import React, { useState, useEffect } from 'react'
import before1 from "../assets/pexels-taiyesalawu-36429335.jpg"
import after1 from "../assets/pexels-kirti-phadke-316475723-17947890.jpg"
import { Timeline } from 'lucide-react';

export const Projects = () => {

  const [selectedProjects, setSelectedprojects] = useState(null);
  const [selectedImg, setSelectedimg] = useState(null);
  const [showAfter, setShowAfter] = useState(false);

  const projects = ([
    {
      id:0,
      type:"Residential",
      year:"2026",
      title:"Residential Interior.",
      city:"Lagos State, Nigeria",
      before:"https://images.pexels.com/photos/7937303/pexels-photo-7937303.jpeg",
      after:"https://images.pexels.com/photos/36511375/pexels-photo-36511375.jpeg"
    },

    {
      id:1,
      type:"Luxury Home",
      year:"2026",
      title:"Luxury Home Interior.",
      city:"Ogun State, Nigeria",
      before:before1,
      after:after1
    },

    {
      id:2,
      type:"Office work",
      year:"2026",
      title:"Office Interiors.",
      city:"Ogun State, Nigeria",
      before:"https://images.pexels.com/photos/35090156/pexels-photo-35090156.jpeg",
      after:"https://images.pexels.com/photos/36631701/pexels-photo-36631701.jpeg"
    }
  ])

  const select = (proj)=>{
    setSelectedprojects(proj.id)
    setSelectedimg(proj);
  }

  useEffect(() => {
  setSelectedprojects(projects[0].id);
  setSelectedimg(projects[0]);
}, []);

  useEffect(() => {
  const interval = setInterval(() => {
    setShowAfter(prev => !prev);
  }, 4000);

  return () => clearInterval(interval);
}, []);

  return (
    <div className='p-5'>
      <div>
         <p className='uppercase text-white/40 text-sm' style={{letterSpacing:"3px", fontFamily:"Titan"}}>Reva Projects 01 - 0{projects.length}</p>

          <h3 className='md:text-5xl text-4xl max-w-xl py-5 text-white/90' style={{fontFamily:"sans-serif", letterSpacing:"1.8px"}}>
          Every project is a portrait of its client
         </h3>
      </div>

     <div className='flex flex-col md:flex-row-reverse gap-4 justify-evenly'>
         <div className='flex flex-col gap-2 my-auto'>
         {projects.map((proj)=> (
           <div key={proj.id} className={`border p-5 rounded-xl h-fit cursor-pointer transition-all duration-500 ${selectedProjects === proj.id ? "border-amber-500 shadow-md shadow-amber-500" : "border-slate-200/20"}`} onClick={()=> select(proj)}>
             <p className='text-sm text-white/50' style={{fontFamily:"sans-serif", letterSpacing:"2px"}}>{proj.type} . {proj.city} . {proj.year}</p>
             <h4 className='capitalize text-xl mt-1' style={{fontFamily:"sans-serif", letterSpacing:"1.8px"}}>{proj.title}</h4>
           </div>
         ))}
      </div>

           <p className="text-white">
            {showAfter ? "AFTER" : "BEFORE"}
           </p>

          <div className="md:w-xl w-full h-110 relative overflow-hidden">

  {/* BEFORE */}
          <div className={`absolute overflow-hidden transition-all duration-1500 ease-in-out ${showAfter
            ? "w-32 h-32 left-5 bottom-5 rounded-2xl z-10"
            : "inset-0 w-full h-full rounded-none"
           }`}
          >
            <img src={selectedImg?.before} alt="" className="w-full h-full object-cover" loading='lazy'/>
          </div>

  {/* AFTER */}
  <div
    className={`absolute overflow-hidden transition-all duration-1500 ease-in-out ${
      showAfter
        ? "inset-0 w-full h-full rounded-none"
        : "w-32 h-32 right-5 bottom-5 rounded-2xl"
    }`}
  >
    <img
      src={selectedImg?.after}
      alt=""
      className="w-full h-full object-cover" loading='lazy'
    />
  </div>

</div>
      </div>
     </div>
  )
}
