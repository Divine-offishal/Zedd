import React from 'react'
import { HiStar, HiOutlineStar } from 'react-icons/hi'
import { ImStarHalf } from 'react-icons/im'

interface reviewProps {
  name: string,
  review: string,
  star: number
}

const ReviewCard: React.FC <reviewProps> = ({name, review, star}) => {
  return (
    <div className=' shadow-xl rounded-md shadow-black/20 w-9/12 min-h-32 bg-primary my-6 p-2'>
      <h1 className='my-2'>{name}</h1>
      <span className=' opacity-50'>
        <i>{review}</i>
      </span>
      <span className='flex gap-2 my-2'>
        {star === 5 && 
        <>
          <HiStar className='text-3xl text-accent'/>
          <HiStar className='text-3xl text-accent'/>
          <HiStar className='text-3xl text-accent'/>
          <HiStar className='text-3xl text-accent'/>
          <HiStar className='text-3xl text-accent'/>
        </>
        }
        {star === 4 && 
        <>
          <HiStar className='text-3xl text-accent'/>
          <HiStar className='text-3xl text-accent'/>
          <HiStar className='text-3xl text-accent'/>
          <HiStar className='text-3xl text-accent'/>
          <HiOutlineStar className='text-3xl text-accent'/>
        </>
        }
        {star === 4.5 && 
        <>
          <HiStar className='text-3xl text-accent'/>
          <HiStar className='text-3xl text-accent'/>
          <HiStar className='text-3xl text-accent'/>
          <HiStar className='text-3xl text-accent'/>
          <ImStarHalf className='text-3xl text-accent'/>
        </>
        }
      </span>
    </div>
  )
}

// <HiStar className='text-3xl text-accent'/>

export default ReviewCard