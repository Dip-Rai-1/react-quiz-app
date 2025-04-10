import React from "react";

function ProgressBar({
  index,
  numOfQuestions,
  points,
  maxPossiblePoints,
  answer,
}) {
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
