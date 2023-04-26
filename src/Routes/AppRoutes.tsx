import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Browse from '../Pages/Browse'
import Accessories from '../Pages/Accessories'
import Carpage from '../Pages/Carpage'
import Saved from '../Pages/Saved/Saved'


const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sales' element={<Browse/>}/>
      <Route path='/repairs' element={<Accessories/>}/>
      <Route path='/saved' element={<Saved/>}/>
      <Route path='/cars/:car' element={<Carpage/>}/>
    </Routes>
  )
}

export default AppRoutes