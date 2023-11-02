import { Container } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-slate-100'>
        <div className='flex container m-auto justify-between h-12 items-center '>
            
            
            <Link to={'/'}><h1 className='text-2xl font-bold'>My Education App</h1></Link>
            <div className=' flex gap-6'>
                <Link to="whyus">Why Us?</Link>
                <Link to="/courses/physics">Courses</Link>
                <Link to="quiz"> Quiz</Link>
                <Link to="tesimonals"> Testimonals</Link>
                <Link to="contact"> Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Header