import React from 'react'
import { Col1, Col2, Col3, Col4 } from '../Data/FooterData'



const Footer = () => {
  return (
    <div className=" md:h-auto min-h-screen w-screen text-primary bg-secondary mt-10 p-6">
      <h1 className='font-bold text-accent text-xl my-4'>ZEDD'S</h1>

      <div className='flex md:flex-row flex-col md:justify-between ml-6'>

        <div className='md:my-0 my-4'>
          {Col1.map((item, i) => (
            <h2 key={i}>{item.word}</h2>
          ))}
        </div>
        <div className='md:my-0 my-4'>
          {Col2.map((item, i) => (
            <h2 key={i}>{item.word}</h2>
          ))}
        </div>
        <div className='md:my-0 my-4'>
          {Col3.map((item, i) => (
            <h2 key={i}>{item.word}</h2>
          ))}
        </div>
        <div className='md:my-0 my-4'>
          {Col4.map((item, i) => (
            <h2 key={i}>{item.word}</h2>
          ))}
        </div>
      </div>
    </div>
  )
}


export default Footer