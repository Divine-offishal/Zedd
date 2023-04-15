import React from 'react'

const Navbar = () => {
  return (
    <div className='h-20 w-screen bg-secondary text-accent pt-4 md:flex hidden fixed top-0'>
      <h1 className='text-4xl ml-4'>ZEDD's</h1>

      <div className='ml-auto mr-4 mt-2'>
        <ul className='flex gap-x-6 '>
          <li>Home</li>
          <li>Accessories</li>
          <li>Repairs</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar