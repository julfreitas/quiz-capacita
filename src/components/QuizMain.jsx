import Timer from "./Timer";

export default function QuizMain() {
  return (
    <section className="quiz">
      <div className="progress-container">
        <progress></progress>
      </div>
      <div className="progress-info">
        <span className="question-count">Questão: 1/10</span>
        <p>Pontos: <span>35/70</span></p>
        <Timer />
      </div>
    </section>
  );
}
