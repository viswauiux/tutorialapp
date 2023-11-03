import React from 'react'
import { Outlet } from 'react-router-dom'

function Body() {
  return (
    <>
    <div className='  h-screen   m-auto pt-5'>
    
     <Outlet></Outlet> 
   
    </div>
    </>
  )
}

export default Body