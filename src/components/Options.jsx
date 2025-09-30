export default function Options({ quizQuestion, dispatch, answer }) {
  return (
    <div className="options">
      {quizQuestion.options.map((option, index) => (
        <button
          className="option"
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
