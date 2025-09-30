export default function Options({quizQuestion}) {
  return (
    <div className="options">
      {quizQuestion.options.map((option)=>(
      <button className="option" key={option}>{option}</button>

      ))}     
    </div>
  );
}
