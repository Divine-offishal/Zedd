import React from 'react'
import { useAppSelector} from '../../App/hooks'

const SavedCard = () => {

  const stateArray = useAppSelector(state => state.savedItemReducer.items)

  return (
    <div className='w-screen h-auto mt-32 '>
      {
        stateArray.map((item, i) => (
          <div key={i} className='flex my-4 rounded-r-xl mx-auto'>
            <img src={item.image} alt={item.name} className="w-56 h-56" />
            <div className='h-56 w-7/12 bg-secondary text-accent'>
              <h1>{item.name}</h1>
            </div>
          </div>
        ))
      }
      
    </div>
  )
}

export default SavedCard