import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Coourses() {
    const btn ='h-10 w-32 flex justify-center items-center bg-teal-400 rounded-xl text-white hover:bg-teal-700'
  return (
    <div className='container m-auto top-8'>
        <div className='flex justify-between mx-96'>
        <Link className={btn}  to='physics'>Physics</Link>
        <Link className={btn} to='mathematics'>Mathematics</Link>
        <Link className={btn} to='social'>Social</Link>
        </div>
        <Outlet/>
    </div>
  )
}

export default Coourses