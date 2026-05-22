import React from "react";

import { useQuiz } from "../context/QuizContext";

function ProgressBar() {
  const { index, numOfQuestions, points, maxPossiblePoints } = useQuiz();
  return (
    <header className="progress">
      <progress max={numOfQuestions} value={index} />
      <p>
        Question <strong>{index + 1}</strong>/{numOfQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{maxPossiblePoints}
      </p>
    </header>
  );
}

export default ProgressBar;
