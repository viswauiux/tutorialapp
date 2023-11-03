import React from 'react'

function Options({que,op}) {
  return (
    <label className='flex gap-2 cursor-pointer' style={{ textTransform: "capitalize" }} htmlFor={op}>
            <input
              type="radio"
              id={op}
              name={que.queid}
              value={op}
            />
            {" "}
            <h1>{op}</h1>
    </label>
  )
}

export default Options