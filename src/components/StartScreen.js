export default function StartScreen({ numOfQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to React Quiz</h2>
      <h3>{numOfQuestions} questions to test your react mastery</h3>
      <button
        className="btn"
        onClick={() => {
          dispatch({ type: "start" });
        }}
      >
        Let's Start
      </button>
    </div>
  );
}
