import { onAuthStateChanged } from 'firebase/auth'
import React, { useState, useEffect } from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../firebase'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {

  const [user, loading, error] = useAuthState(auth);

  return (
    user ? <Outlet/>: <Navigate to='/signup'/>
  )
}

export default PrivateRoute