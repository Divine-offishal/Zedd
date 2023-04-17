import React from 'react'
import CarCard from '../Components/Cards/CarCard'

const Browse = () => {
  return (
    <div className="w-screen min-h-screen mt-20 grid justify-items-center gap-y-6">
      <CarCard/>
      <CarCard/>
      <CarCard/>
    </div>
  )
}

export default Browse