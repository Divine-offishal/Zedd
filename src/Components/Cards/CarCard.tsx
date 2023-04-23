import React, { useState } from 'react'

type cardProps = {
  name: string,
  image: string
}

const CarCard = ({name, image}: cardProps) => {


  return (
    <div className='md:h-64 relative min-h-[25em] xl:w-[23em] md:w-82 w-10/12 shadow-md shadow-black/20 rounded-md overflow-hidden'>
      <img src={image} alt="" className="w-full h-full" />
      <div className=' absolute bottom-0 bg-gradient-to-r from-accent/75 to-accent/10 w-full h-20 px-2'>
        <h1 className='text-primary text-2xl font-bold mt-4'>{name.substring(0, 13)}...</h1>
      </div>
    </div>
  )
}

export default CarCard