import React from 'react'

function Results({quizresults,testAnswers,setShowResult}) {

  return (
    <div  className=' h-full w-full flex justify-center items-center  bg-slate-500 top-0 left-0 absolute'>
        <div className='bg-white p-14 relative rounded-lg'>

                <h1>Your Results {quizresults}/{testAnswers.length}</h1>
                <button className='absolute p-2 px-3 rounded-lg text-white top-0 right-0 m-2 text-xs bg-red-500' onClick={()=>setShowResult("hide")}>X</button>
        </div>
    </div>
  )
}

export default Results