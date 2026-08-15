import React, { useState } from 'react'

export const Navbar = () => {

  const [menu, setMenu] = useState(false);
  const Links = [
    "About", "Services", "Projects", "Process", "Reviews"
  ]
 

  return (
    <>
      <nav className='p-3.5 fixed z-30 w-full text-white backdrop-blur-2xl'>
        <div className='flex lg:justify-start justify-between'>
            <div className='px-3'>
             <h1 className='uppercase'>Reva</h1>
            </div>

            <div className='lg:flex justify-around gap-2 w-md m-auto hidden'>
              {Links.map((lnk)=> (
               <p className='uppercase text-xs font-medium cursor-pointer btn' style={{letterSpacing:"1.5px"}}>{lnk}</p>
              ))}
            </div>

            <button className='border rounded-lg p-1 lg:hidden h-fit' onClick={()=> setMenu(!menu)}>
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
                <p className='uppercase text-xs font-medium text-center cursor-pointer btn p-0.5' style={{letterSpacing:"1.5px"}}>{lnk}</p>
               ))}
             </div>
           )}
         </div>
      </nav>
    </>
  )
}
