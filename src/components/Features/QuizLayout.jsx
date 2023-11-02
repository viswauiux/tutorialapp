import React from "react";

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
        >
          <input
            type="radio"
            id={que.queid}
            name={que.queid}
            value={que.options.option1}
          />
          <label style={{ textTransform: "capitalize" }} htmlFor={que.queid}>
            {" "}
            {que.options.option1}
          </label>
          <input
            type="radio"
            id={que.queid}
            name={que.queid}
            value={que.options.option2}
          />
          <label style={{ textTransform: "capitalize" }} htmlFor={que.queid}>
            {" "}
            {que.options.option2}
          </label>
          <input
            type="radio"
            id={que.queid}
            name={que.queid}
            value={que.options.option3}
          />
          <label style={{ textTransform: "capitalize" }} htmlFor={que.queid}>
            {" "}
            {que.options.option3}
          </label>
          <input
            type="radio"
            id={que.queid}
            name={que.queid}
            value={que.options.option4}
          />
          <label style={{ textTransform: "capitalize" }} htmlFor={que.queid}>
            {" "}
            {que.options.option4}
          </label>
        </div>
      </div>
    </>
  );
}

export default QuizLayout;
