import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import courseContext from '../../../Context'
import { quizbtn } from "../../../Utilities/buttons";


function MathsTheory() {
    const data =  useContext(courseContext)

  return (
    <div>
     <h1>{data[1].maths.theoryTutes.title}</h1>
      <p>
        {data[1].maths.theoryTutes.description}
      </p>
    <Link to={"/quiz/mathematicsquiz"}> <button className={quizbtn}>Take a Quiz</button></Link>

  </div>
  )
}

export default MathsTheory