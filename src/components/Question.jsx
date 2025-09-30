import Options from "./Options";

export default function Question({quizQuestion}) {
  return (
    <div className="question-container">
      <h2 className="question">{quizQuestion.question}</h2>
      <Options quizQuestion={quizQuestion} />
    </div>
  );
}
