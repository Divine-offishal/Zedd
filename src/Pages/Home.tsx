import React, { useEffect } from 'react'
import Hero from '../Components/Hero'
import Sales from '../Components/Sales'
import Repairs from '../Components/Repairs'
import Reviews from '../Components/Reviews'
import FAQ from '../Components/FAQ'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Hero/>
      <Sales/>
      <Repairs/>
      <Reviews/>
      <FAQ/>
    </div>
  )
}


export default Home