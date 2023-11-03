import React from "react";
import Options from "./Options";

function QuizLayout({que,index,submitHandler}) {
    function answerHandler(e,queAns,index) {
        let temp = e.target.value === queAns.answer?1:0
       submitHandler(temp,index)
    }
  return (
    <>
      <div className="border p-4 my-3" key={que.queid}>
        <h1>
          <span className="font-bold">{index + 1}.</span> {que.question}
        </h1>
        <div
          className="flex gap-4 mt-3"
          onChange={(e) => answerHandler(e, que, index)}
        >{que.options.map((op)=>(<Options que={que} op={op} />))}
        </div>
      </div>
    </>
  );
}

export default QuizLayout;
