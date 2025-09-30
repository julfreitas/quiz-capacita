export default function EndQuiz() {
  return (
    <section className="completion">
      <h2>Obrigada por completar o Quiz!</h2>
      <span>Mandou bem!</span>
      <p className="result">
        Você pontuou <strong>20</strong> de 70 e sua porcentagem é (20)%
      </p>
      <p className="highscore">Melhor pontuação: 65 points</p>
      <button>Reiniciar</button>
    </section>
  );
}
