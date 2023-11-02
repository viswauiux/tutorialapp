import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import courseContext from '../../../Context'
import { quizbtn } from "../../../Utilities/buttons";


function SocialTheory() {
    const data =  useContext(courseContext)

    return (
    <div>
      <h1>{data[2].social.theoryTutes.title}</h1>
      <p>
        {data[2].social.theoryTutes.description}
      </p>
      <Link to={"/quiz/socialquiz"}> <button className={quizbtn}>Take a Quiz</button></Link>
    </div>
  )
}

export default SocialTheory