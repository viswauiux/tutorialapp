import React from 'react'
import { Outlet } from 'react-router-dom'

function Boody() {
  return (
    <>
    <div className=' min-h-screen   m-auto pt-5'>

     <Outlet></Outlet> 
   
    </div>
    </>
  )
}

export default Boody