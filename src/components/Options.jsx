export default function Options({ quizQuestion, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {quizQuestion.options.map((option, index) => (
        <button
          className={`option ${
            hasAnswered?index === quizQuestion.correctAnswer ? "correct" : "wrong":""
          }`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
