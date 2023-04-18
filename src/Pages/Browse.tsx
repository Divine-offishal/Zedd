import React from 'react'
import CarCard from '../Components/Cards/CarCard'

const Browse = () => {
  return (
    <div className="w-screen min-h-screen mt-20">
      <div className=' grid md:grid-cols-2 justify-items-center gap-y-6'>
        <CarCard/>
        <CarCard/>
        <CarCard/>
        <CarCard/>
      </div>
    </div>
  )
}

export default Browse