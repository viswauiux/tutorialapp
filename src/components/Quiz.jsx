import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { quizbtn } from '../Utilities/buttons'
function Quiz() {
  return (
    <div className='container m-auto top-8'>
        <div className='flex  justify-between mx-96'>
        <Link className={quizbtn}  to='/quiz'>Physics Quiz</Link>
        <Link className={quizbtn} to='mathematicsquiz'>Mathematics Quiz</Link>
        <Link className={quizbtn} to='socialquiz'>Social Quiz</Link>
        </div>
        <Outlet/>
    </div>
  )
}

export default Quiz