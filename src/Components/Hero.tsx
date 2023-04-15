import React from 'react'
import { Images } from '../assets/Images/Images'
import { } from 'framer-motion'

const Hero = () => {
  return (
    <div className='md:h-screen h-[32em] w-screen'>
      <img src={Images.HeroImage} alt="" className="h-full w-full object-cover" />
      
      <span className=' md:text-8xl text-5xl fixed 2xl:top-[50%] md:top-[40%] top-[30%] 2xl:left-[10%] md:left-[8&] text-accent text-center'>
        <div>
          <b className='mr-2'>Experience</b>
        </div>
         the thrill of luxury driving
      </span>
    </div>
  )
}

export default Hero