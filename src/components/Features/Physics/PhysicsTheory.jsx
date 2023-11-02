import React, { useContext } from "react";
import { Link } from "react-router-dom";
import courseContext from '../../../Context'
import { quizbtn } from "../../../Utilities/buttons";


function PhysicsTheory() {
    const data =  useContext(courseContext)
  return (
    <div>
      <h1>{data[0].physics.theoryTutes.title}</h1>
      <p>
        {data[0].physics.theoryTutes.description}
      </p>
      <Link to={"/quiz/physicsquiz"}> <button className={quizbtn}>Take a Quiz</button></Link>

    </div>
  );
}

export default PhysicsTheory;
