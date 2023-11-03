import React, { useContext, useState } from "react";
import QuizLayout from "../QuizLayout";
import courseContext from "../../../Context";
import Results from "../Results";
import { quizbtn } from "../../../Utilities/buttons";


function SocialQuiz() {

  const data = useContext(courseContext);
  const [showResult, setShowResult] = useState("hide");
  const [quizresults, setQuizesults] = useState();

  let tempMarks = [];
  const [testAnswers, setTestAnswers] = useState(Array(data[0].physics.quiz.length).fill(0));


  function submitHandler(marks, index) {
    tempMarks = testAnswers;
    tempMarks[index] = marks;
    setTestAnswers([...tempMarks]);
  }

  return (
    <>
      <div className="relative">
      <h1 className="text-center font-bold text-2xl">Social Studies Quiz</h1>
        {data[2].social.quiz.map((que, index) => (
          <QuizLayout
            que={que}
            key={index}
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

export default SocialQuiz;
