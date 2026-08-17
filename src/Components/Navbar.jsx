import React, { useState } from 'react'

export const Navbar = () => {

  const [menu, setMenu] = useState(false);
 const Links = [
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Process", id: "process" },
  { name: "Reviews", id: "reviews" }
]
 

  return (
    <>
      <nav className='p-3.5 fixed z-30 w-full text-white backdrop-blur-2xl'>
        <div className='flex lg:justify-start justify-between'>
            <a href='#hero' className='px-3 my-auto'>
             <h1 className='uppercase text-2xl' style={{letterSpacing:"3px"}}>Reva</h1>
             <span className='-mt-2 block uppercase' style={{fontFamily:"sans-serif", letterSpacing:"2px"}}>Interiors</span>
            </a>

            <div className='lg:flex justify-around gap-2 w-md m-auto hidden'>
              {Links.map((lnk)=> (
                <a key={lnk.id} href={`#${lnk.id}`} className='uppercase text-xs font-medium cursor-pointer btn' style={{letterSpacing:"1.5px"}}> {lnk.name}</a>))}
            </div>

            <button className='border rounded-lg p-1 lg:hidden h-fit my-auto' onClick={()=> setMenu(!menu)}>
              {!menu ? 
               <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	               <path d="M0 0h24v24H0z" fill="none" />
	               <path fill="currentColor" fill-rule="evenodd" d="M3 16h18v2H3zm0-5h18v2H3zm0-5h18v2H3z" />
                </svg>
               </span>
               : 
               <span>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	                <path d="M0 0h24v24H0z" fill="none" />
	                <path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" />
                 </svg>
               </span>
            }
            </button>
        </div>

         <div className='lg:hidden'>
           {menu && (
             <div className='grid gap-5 mt-3'>
               {Links.map((lnk)=> (
                 <a key={lnk.id} href={`#${lnk.id}`} className='uppercase text-xs font-medium text-center cursor-pointer btn p-0.5' style={{letterSpacing:"1.5px"}} onClick={() => setMenu(false)}> {lnk.name} </a>))}
             </div>
           )}
         </div>
      </nav>
    </>
  )
}
