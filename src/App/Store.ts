import { configureStore } from '@reduxjs/toolkit'
import SavedReducer from '../Features/SavedItemsSlice'

const Store = configureStore({
  reducer: {
    savedItemReducer: SavedReducer
  }
})

export default Store