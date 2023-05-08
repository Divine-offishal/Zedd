import React, { useEffect } from 'react'
import Hero from '../Components/Hero'
import Sales from '../Components/Sales'
import Repairs from '../Components/Repairs'
import Reviews from '../Components/Reviews'
import FAQ from '../Components/FAQ'
import PageTransition from '../Components/Animations/PageTransitions'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <PageTransition>
      <div>
        <Hero/>
        <Sales/>
        <Repairs/>
        <Reviews/>
        <FAQ/>
      </div>
    </PageTransition>
  )
}


export default Home