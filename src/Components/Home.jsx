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
    <div>
        <div className=''>
            <Hero/>
        </div>

        {/* <div>
            <About/>
        </div><br />

        <div>
            <Services/>
        </div><br />

        <div>
            <Projects/>
        </div><br />

        <div>
            <Process/>
        </div><br />

        <div>
            <Testimonial/>
        </div><br />

        <div>
            <Contact/>
        </div><br />

        <div>
            <Blog/>
        </div><br /> */}
    </div>
  )
}
