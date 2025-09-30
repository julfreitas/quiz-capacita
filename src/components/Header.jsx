export default function Header({numOfQuestion, dispatch}) {
  return (
    <section className="bemvindo">
      <h1>Bem-vindo ao Quiz Capacita</h1>
      <p>Total de questões: {numOfQuestion}</p>
      <button onClick={()=>dispatch({type: "start"})}>Iniciar</button>
    </section>
  );
}
