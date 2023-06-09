import React from 'react'
import { Images } from '../assets/Images/Images'
import { HiOutlineArrowCircleRight } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'

const Repairs = () => {
  return (
    <div className='h-screen w-screen relative '>
      <img src={Images.Repairs} alt="" className="h-full w-full object-cover" />
      <div className="h-full w-full bg-black/70 absolute top-0">
        <h1 className="text-5xl text-center text-accent absolute md:top-[50%] top-[45%] md:left-[10%] left-[5%]">
          Repairs and accessories? We've got you
          <NavLink to='/repairs'>
            <HiOutlineArrowCircleRight className='text-6xl text-primary mx-auto mt-5 hover:scale-125 transition-all ease-in-out duration-200 animate-pulse'/>
          </NavLink>
        </h1>
        
      </div>
    </div>
  )
}

export default Repairs