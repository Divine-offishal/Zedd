import React from 'react'
import { useAppSelector} from '../../App/hooks'

const SavedCard = () => {

  const stateArray = useAppSelector(state => state.savedItemReducer.items)

  return (
    <div className='w-screen h-auto'>
      {
        stateArray.map((item, i) => (
          <div key={i} className='flex my-4 rounded-r-xl mx-auto md:ml-20 px-4'>
            <div className=' h-full w-56 overflow-hidden'>
              <img src={item.image} alt={item.name} className="w-56 h-56" />
            </div>
            <div className='h-56 w-9/12 bg-secondary text-accent md:text-xl text-center'>
              <h1>{item.name.substring(0, 20)}...</h1>
            </div>
          </div>
        ))
      }
      
    </div>
  )
}

export default SavedCard