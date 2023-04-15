import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import MobileNav from './Components/Navbar/MobileNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-screen bg-primary '>
      <Navbar/>
      <MobileNav/>
      
    </div>
  )
}

export default App
