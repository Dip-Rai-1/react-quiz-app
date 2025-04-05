import Option from "./Option";

function Question({ questions }) {
  return (
    <div>
      <h4>{questions.question}</h4>
      <Option questions={questions} />
    </div>
  );
}

export default Question;
