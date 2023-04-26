import React from 'react'
import SavedCard from './SavedCard'
import EmptyPage from './EmptyPage'
import { useAppSelector} from '../../App/hooks'

const Saved = () => {

  const stateArray = useAppSelector(state => state.savedItemReducer.items)

  return (
    <div className='w-screen h-auto mt-32 '>
      {
        stateArray.length > 0 ? <SavedCard/> : <EmptyPage/>
      }
      
    </div>
  )
}

export default Saved