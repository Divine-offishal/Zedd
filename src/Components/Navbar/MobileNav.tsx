import React, { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { useAnimate, stagger, motion} from "framer-motion";
import useMenuAnimation from '../Animations/useMenuAnimation';






const MobileNav = () => {

  const [open, setOpen] = useState<boolean>(false)
  const scope = useMenuAnimation(open);

  return (
    <>
    <div className='h-20 w-screen bg-secondary text-accent pt-4 md:hidden flex fixed top-0 z-20'>
      <h1 className='text-4xl ml-4'>ZEDD's</h1>
      <HiMenu className='text-5xl ml-auto' onClick={() => setOpen(true)}/>
    </div>

    <nav ref={scope} className={`fixed top-0 transition-all duration-500 ease-in-out h-screen w-7/12 bg-accent z-30 md:hidden ${open? 'right-0': 'right-[-400px]'}`}>
      <ul className=' space-y-20 space-x-10' >
        <HiX className='text-5xl ml-auto mt-6' onClick={() => setOpen(false)}/>
        <li >Home</li>
        <li >Accessories</li>
        <li >Repairs</li>
      </ul>
    </nav>
    </>
  )
}

export default MobileNav