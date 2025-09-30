import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Error from "./components/Error";
import Question from "./components/Question";

const initialState = {
  quizQuestion: [],
  status: "loading",
  index: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "fetch_sucess":
      return {
        ...state,
        quizQuestion: action.payload,
        status: "ready",
      };
    case "fetch_error":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return{
        ...state,
        status: "active"
      }
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { quizQuestion, status, index } = state;
  
  const numOfQuestion=quizQuestion.length;
  useEffect(function () {
    fetch("http://localhost:8000/quizQuestion")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "fetch_sucess", payload: data });
        console.log(data);
      })
      .catch((err) => dispatch({ type: "fetch_error" }));
  }, []);
  return (
    <>
      {status === "loading" && <Loading />}
      {status === "error" && <Error />}
      {status === "ready" && <Header numOfQuestion={numOfQuestion} dispatch={dispatch}/>}
      {status === "active" && <Question quizQuestion={quizQuestion[index]}/>}
    </>
  );
}
