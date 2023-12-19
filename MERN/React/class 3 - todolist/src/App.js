import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [list, setList] = useState(["hello", "world"]);
  const [inputText, setInputText] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <h4>TodoList App</h4>

        <input type="text" placeholder="Please input any text"></input>
        <button type="button">Add Todo</button>

        <ul>
          {list.map(function (item) {
            return (
              <div>
                <p>-----</p>
                {item}xx
              </div>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
