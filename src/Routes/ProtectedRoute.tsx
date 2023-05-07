import { onAuthStateChanged } from 'firebase/auth'
import React, { useState, useEffect } from 'react'
import { auth } from '../firebase'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

  const [isAuth, setIsAuth] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuth(!!user); // !!user returns true if user is not null or undefined
    });
  
    // Return a cleanup function to unsubscribe from the callback
    return () => unsubscribe();

  }, [auth, onAuthStateChanged])

  return (
    isAuth ? <Outlet/>: <Navigate to='/saved'/>
  )
}

export default ProtectedRoute