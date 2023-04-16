import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import MobileNav from './Components/Navbar/MobileNav'
import Hero from './Components/Hero'
import Sales from './Components/Sales'
import Repairs from './Components/Repairs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-screen bg-primary '>
      <Navbar/>
      <MobileNav/>
      <Hero/>
      <Sales/>
      <Repairs/>
    </div>
  )
}

export default App
