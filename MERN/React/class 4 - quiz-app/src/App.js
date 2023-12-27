import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(function () {
    getQuestions();
  }, []);

  function getQuestions() {
    fetch("https://the-trivia-api.com/v2/questions")
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response, "response-----");
        setQuestions(response);
      });
  }

  console.log(questions, "questions-----");

  function handleNext() {
    setIndex((prev) => prev + 1);
  }

  function handleRestart() {
    setIndex(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz Applicaiton</h1>

        {questions.length ? (
          <>
            <h2>
              Q-{index + 1}
              {questions[index].question.text}
            </h2>
          </>
        ) : (
          <>
            <h2>Loading...........</h2>
          </>
        )}

        {index == questions.length - 1 ? (
          <>
            <button onClick={handleRestart}>Restart</button>
          </>
        ) : (
          <>
            {" "}
            <button onClick={handleNext}>NEXT</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
