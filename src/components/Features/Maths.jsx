import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Maths() {
  return (
    <>
    <div className='flex flex-col items-center h-full'>
    <div className='my-8 flex  justify-center gap-6'>
    <Link to='/courses/mathematics'> <button className='flex justify-center gap-4 items-center h-14 bg-slate-200 w-64 rounded-2xl'> <img width="32" height="32" src="https://img.icons8.com/fluency-systems-filled/48/video.png" alt="video"/>   Videos </button></Link>
    <Link to='mathstheory'><button className='flex justify-center gap-4 items-center h-14 bg-slate-200 w-64 rounded-2xl'> <img width="32" height="32" src="https://img.icons8.com/ios/50/open-book--v1.png" alt="open-book--v1"/>  Theory </button></Link>
    </div>
    <Outlet/>
    </div>
    </>
  )
}

export default Maths