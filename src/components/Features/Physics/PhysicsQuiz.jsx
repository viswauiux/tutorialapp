import React, { useContext, useState } from "react";
import courseContext from "../../../Context";
import QuizLayout from "../QuizLayout";
import Results from "../Results";
import { quizbtn } from "../../../Utilities/buttons";


function PhysicsQuiz() {

  const data = useContext(courseContext);
  const [quizresults, setQuizesults] = useState();
  const [showResult, setShowResult] = useState("hide");

  let tempMarks = [];
  const [testAnswers, setTestAnswers] = useState(
    Array(data[0].physics.quiz.length).fill(0)
  );

  function submitHandler(marks, index) {
    tempMarks = testAnswers;
    tempMarks[index] = marks;
    setTestAnswers([...tempMarks]);
  }

  console.log(testAnswers);

  return (
    <>
      <div className="relative">
        {data[0].physics.quiz.map((que, index) => (
          <QuizLayout
            key={index}
            que={que}
            submitHandler={submitHandler}
            index={index}
          />
        ))}
        {
          showResult === "show" ? (
            <>
              <Results
                quizresults={quizresults}
                setShowResult={setShowResult}
                testAnswers={testAnswers}
              />
            </>
          ) : null
          //   {quizresults}/{physicsAnswers.length}
        }

        <div>
          <button
            className={quizbtn}
            onClick={() => {
              setShowResult("show");
              setQuizesults(
                testAnswers.reduce((acc, itt) => {
                  return acc + itt;
                }, 0)
              );
            }}
          >
            Show Results
          </button>
        </div>
      </div>
    </>
  );
}

export default PhysicsQuiz;
