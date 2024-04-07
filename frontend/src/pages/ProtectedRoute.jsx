import React from 'react'
import {Outlet} from 'react-router-dom'

function ProtectedRoute() {
    let islogin=true;
  return (
    islogin?<Outlet/>:"login please"
    
  )
}

export default ProtectedRoute