import React, { useState } from 'react'
import { GoDiffAdded } from 'react-icons/go'
import { useDispatch } from 'react-redux'

type cardProps = {
  name: string,
  image: string,
  payload: any
}

const CarCard = ({name, image, payload}: cardProps) => {

  const dispatch = useDispatch()

  return (
    <div className='md:h-64 relative min-h-[25em] xl:w-[23em] md:w-82 w-10/12 shadow-md shadow-black/20 rounded-md overflow-hidden'>
      <img src={image} alt="" className="w-full h-full" />
      <div className=' absolute flex bottom-0 bg-gradient-to-r from-accent/95 to-accent/10 w-full h-20 px-2'>
        <h1 className='text-primary text-2xl font-bold mt-4'>{name.substring(0, 13)}...</h1>

        <div className='ml-auto mt-4' onClick={() => dispatch(payload)}>
          <GoDiffAdded className='text-4xl text-accent'/>
        </div>
      </div>
    </div>
  )
}

export default CarCard