import React from 'react'

const Form = ({}) => {
  return (
    <form className=' grid justify-items-center'>
      <div className='mt-20'>
        <label className='block text-secondary' htmlFor="email">Email</label>
        <input type="email" name="email" className='w-[45em] h-12 border-2 border-secondary bg-primary px-6 text-secondary'/>
      </div>

      <div className='mt-20'>
        <label className='block text-secondary' htmlFor="password">Password</label>
        <input type="password" name="password" className='w-[45em] h-12 border-2 border-secondary bg-primary px-6 text-secondary'/>
      </div>

      <button className=' px-3 py-1 mt-4 bg-secondary text-accent w-[10em]'>
        SignIn
      </button>
    </form>
  )
}

export default Form