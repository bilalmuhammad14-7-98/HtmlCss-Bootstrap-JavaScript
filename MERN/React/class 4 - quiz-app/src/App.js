import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [currentIndexData, setCurrentIndexData] = useState();
  const [options, setOptions] = useState([]);
  const [marks, setMarks] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [scorePage, setScorePage] = useState(false);

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
    console.log(correctAnswer, "userSelectedAnswer----------");
    console.log(currentIndexData.correctAnswer, "correctAnswer----------");

    if (correctAnswer == currentIndexData.correctAnswer) {
      console.log("sai jawab");
      setMarks((prev) => prev + 10);
    } else {
      console.log("galat jawab");
    }

    console.log(index, questions.length - 1);
  }

  function handleScore() {
    console.log("hello -----");
    setScorePage(true);

    if (correctAnswer == currentIndexData.correctAnswer) {
      console.log("sai jawab");
      setMarks((prev) => prev + 10);
    } else {
      console.log("galat jawab");
    }
  }

  function handleRestart() {
    setIndex(0);
    setScorePage(false);
    setMarks(0);
  }

  function handleAnswer(answer) {
    console.log(answer, "answer");
    setCorrectAnswer(answer);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz Applicaiton</h1>
        {scorePage ? (
          <>
            <h1>Well Done. You completed your assessment</h1>
            <h2>Your total marks are: {marks}</h2>

            <button
              onClick={handleRestart}
              style={{
                padding: "10px 36px",
                borderRadius: "12px",
                marginTop: "30px",
                backgroundColor: "cornsilk",
                fontSize: "22px",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              Restart
            </button>
          </>
        ) : (
          <>
            {questions.length ? (
              <>
                <h2>
                  {"Q-"}
                  {index + 1}
                  {") "}
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
                        // defaultChecked={index === 0} // Check the first radio button by default
                        checked={item == correctAnswer}
                      />
                      <label htmlFor={index}>{item}</label>
                    </span>
                  </>
                );
              })}

            <button
              onClick={index == questions.length - 1 ? handleScore : handleNext}
              style={{
                padding: "10px 36px",
                borderRadius: "12px",
                marginTop: "30px",
                backgroundColor: "cornsilk",
                fontSize: "22px",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              NEXT
            </button>

            {index == questions.length - 1 && (
              <>
                <button
                  onClick={handleRestart}
                  style={{
                    padding: "10px 36px",
                    borderRadius: "12px",
                    marginTop: "30px",
                    backgroundColor: "cornsilk",
                    fontSize: "22px",
                    fontWeight: 800,
                    cursor: "pointer",
                  }}
                >
                  Restart
                </button>
              </>
            )}
          </>
        )}
      </header>
    </div>
  );
}

export default App;
