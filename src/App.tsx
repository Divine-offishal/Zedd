import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-screen bg-primary'>
      <h1 className=' text-center text-4xl bg-secondary text-accent h-20 w-screen'>Hello world</h1>
      <h2 className='text-3xl text-accent'>This is a test</h2>
    </div>
  )
}

export default App
