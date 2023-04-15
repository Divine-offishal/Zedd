import React from 'react'
import { Images } from '../assets/Images/Images'
import { } from 'framer-motion'

const Hero = () => {
  return (
    <div className='md:h-screen h-[32em] w-screen'>
      <img src={Images.HeroImage} alt="" className="h-full w-full object-cover" />
      
      <span className=' md:text-8xl text-5xl fixed md:top-[50%] top-[30%] md:left-[10%] text-accent text-center'>
        <div>
          <b className='mr-2'>Experience</b>
        </div>
         the thrill of luxury driving
      </span>
    </div>
  )
}

export default Hero