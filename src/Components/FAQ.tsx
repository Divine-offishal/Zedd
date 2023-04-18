import React from 'react'
import { Accordion } from '@mantine/core'

const FAQ = () => {


  return (
    <div className='w-screen h-96'>

      <h1 className='text-4xl font-bold text-center mt-10 mb-6'>FAQs</h1>

        <Accordion className='bg-primary text-secondary'>
          <Accordion.Item value='jbjw'>
            <Accordion.Control className='text-secondary font-semibold'>How to buy</Accordion.Control>
            <Accordion.Panel>Colors test</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item value='customization'>
            <Accordion.Control>Test 1</Accordion.Control>
            <Accordion.Panel>Colors test</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item value='customization'>
            <Accordion.Control>Test 1</Accordion.Control>
            <Accordion.Panel>Colors test</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
    </div>
  )
}

export default FAQ