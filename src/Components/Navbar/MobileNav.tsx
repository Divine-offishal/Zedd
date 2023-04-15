import React, { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { useAnimate, stagger, motion } from "framer-motion";

const MobileNav = () => {

  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
  const [open, setOpen] = useState<Boolean>(true)
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("li", { opacity: 1 }, { delay: stagger(0.1) })
    
  }, [])

  return (
    <>
    <div className='h-20 w-screen bg-secondary text-accent pt-4 md:hidden flex'>
      <h1 className='text-4xl ml-4'>ZEDD's</h1>
      <HiMenu className='text-5xl ml-auto' onClick={() => setOpen(true)}/>
    </div>

    <div className={`fixed top-0 transition-all duration-500 ease-in-out  h-screen w-7/12 bg-accent z-30 md:hidden ${open? 'right-0': 'right-[-300px]'}`}>
      <ul className=' space-y-20 space-x-10' ref={scope}>
        <HiX className='text-5xl ml-auto mt-6' onClick={() => setOpen(false)}/>
        <li>Home</li>
        <li>Accessories</li>
        <li>Repairs</li>
      </ul>
    </div>
    </>
  )
}

export default MobileNav