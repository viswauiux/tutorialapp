import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-slate-100'>
        <div className='flex container m-auto justify-between py-3 items-center '>
            
            
            <Link to={'/'}><h1 className='text-2xl font-bold'>My Educational App</h1></Link>
            <div className=' flex gap-6'>
                <Link className='hover:scale-105 hover:text-blue-700' to="whyus">Why Us?</Link>
                <Link className='hover:scale-105 hover:text-blue-700' to="/courses/physics">Courses</Link>
                <Link className='hover:scale-105 hover:text-blue-700' to="quiz"> Quiz</Link>
                <Link className='hover:scale-105 hover:text-blue-700' to="tesimonals"> Testimonals</Link>
                <Link className='hover:scale-105 hover:text-blue-700' to="contact"> Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Header