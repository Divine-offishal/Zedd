import React, { useState } from 'react'
import { GoDiffAdded } from 'react-icons/go'
import { useDispatch } from 'react-redux'
import { useAppDispatch } from '../../App/hooks'
import { added } from '../../Features/SavedItemsSlice'

type cardProps = {
  name: string,
  image: string,
  price: string,
  payload: any
}

// 
const CarCard = ({name, image, price, payload}: cardProps) => {

  const dispatch = useAppDispatch()

  return (
    <div className='md:h-64 relative min-h-[25em] xl:w-[23em] md:w-82 w-10/12 shadow-md shadow-black/20 rounded-md overflow-hidden'>
      <img src={image} alt="" className="w-full h-full" />
      <div className=' absolute flex bottom-0 bg-gradient-to-r from-accent/95 to-accent/10 w-full h-20 px-2'>
        <span className='text-primary mt-4'>
          <h1 className='text-primary text-2xl font-bold'>{name.substring(0, 13)}...</h1>
          <h1 className='text-xl font-medium'>{price}</h1>
        </span>
{/*  */}
        <div className='ml-auto mt-4' onClick={() => dispatch(added(payload))}>
          <GoDiffAdded className='text-4xl text-accent'/>
        </div>
      </div>
    </div>
  )
}

export default CarCard