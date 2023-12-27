import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [currentIndexData, setCurrentIndexData] = useState();
  const [options, setOptions] = useState([]);
  useEffect(function () {
    getQuestions();
  }, []);

  useEffect(() => {
    const data = questions[index];
    console.log(data, "current index value");
    setCurrentIndexData(data);
  }, [index, questions]);

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

  useEffect(() => {
    if (currentIndexData) {
      console.log(currentIndexData, "currentIndexData------------->");
      let correctAnswer = currentIndexData.correctAnswer;
      let incorrectAnswers = currentIndexData.incorrectAnswers;
      const updatedArray = [...incorrectAnswers, correctAnswer];
      console.log(updatedArray, "updateArray------------");
      setOptions(updatedArray);
    }
  }, [currentIndexData]);

  useEffect(() => {
    if (options) {
      console.log(options, "options-------");
    }
  }, [options]);

  function handleNext() {
    setIndex((prev) => prev + 1);
  }

  function handleRestart() {
    setIndex(0);
  }

  function handleAnswer(answer) {
    console.log(answer, "answer");
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

        {options &&
          options.map((item, index) => {
            return (
              <>
                <span key={index}>
                  <input
                    type="radio"
                    id={index}
                    name="drone"
                    value={item}
                    onChange={() => handleAnswer(item)}
                    defaultChecked={index === 0} // Check the first radio button by default
                  />
                  <label htmlFor={index}>{item}</label>
                </span>
              </>
            );
          })}

        {index == questions.length - 1 ? (
          <>
            <button onClick={handleRestart}>Restart</button>
          </>
        ) : (
          <>
            <button onClick={handleNext}>NEXT</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
