import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import courseContext from '../../../Context'
import { quizbtn } from "../../../Utilities/buttons";


function MathsVideos() {
    const data =  useContext(courseContext)

  return (
    <>
    <div className='flex gap-11'>
    {
        data[1].maths.videoTutes.map(url=>(
          <iframe width="300" height="200" src={url} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

        ))
      }
    </div>
    <Link to={"/quiz/mathematicsquiz"}> <button className={quizbtn}>Take a Quiz</button></Link>

    </>
  )
}

export default MathsVideos