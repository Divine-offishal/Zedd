import React from 'react'
import { Images } from '../assets/Images/Images'
import { HiOutlineArrowCircleRight } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'

const Sales = () => {
  return (
    <div className='h-screen w-screen relative border-b-4 border-accent'>
      <img src={Images.Sales} alt="" className="h-full w-full object-cover" />
      <div className='h-screen w-screen absolute top-0 left-0 bg-black/70'>
        <h1 className="text-primary mx-4 text-6xl absolute md:top-[50%] top-[30%] md:left-[20%] left-[8%]">
          <div><b>Get your dream ride</b></div>
          <span className='text-2xl flex mt-4'>
            click and check our car sales!
            <NavLink to='/sales'>
              <HiOutlineArrowCircleRight className='text-7xl shrink-0 text-accent md:ml-20 ml-4 animate-pulse'/>
            </NavLink>
          </span>
        </h1>
      </div>
    </div>
  )
}

export default Sales