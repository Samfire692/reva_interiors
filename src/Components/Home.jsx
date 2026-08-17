import React from 'react'
import { Hero } from './Hero'
import { About } from './About'
import { Services } from './Services'
import { Projects } from './Projects'
import { Process } from './Process'
import { Testimonial } from './Testimonial'
import { Contact } from './Contact'
import { Blog } from './Blog'

export const Home = () => {
  return (
    <div className='bg-black text-white'>
        <div className='' id='hero'>
            <Hero/>
        </div><br />

        <div id='about' className=' scroll-my-18'>
            <About/>
        </div><br />

        <div id='services' className=' scroll-my-18'>
            <Services/>
        </div>

        <div id='projects' className=' scroll-my-18'>
            <Projects/>
        </div><br />

        <div id="process" className=' scroll-my-18'>
            <Process/>
        </div><br />

        <div id="reviews" className=' scroll-my-18'>
            <Testimonial/>
        </div><br />

        <div className=''>

            <div id='booking' className=' scroll-my-18'>
              <Blog/>
            </div>

            <div id='contacts' className=''>
              <Contact/>
            </div>
        </div>
    </div>
  )
}
