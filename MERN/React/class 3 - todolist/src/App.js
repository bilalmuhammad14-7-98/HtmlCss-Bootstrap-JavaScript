import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [list, setList] = useState(["hello", "world"]);
  const [inputText, setInputText] = useState();

  function updateText(event) {
    console.log(event.target.value);
    let value = event.target.value;
    setInputText(value);
  }

  function addTodo() {
    console.log(inputText, "input text");
    const copyList = [...list];
    copyList.push(inputText);
    setList(copyList);
  }

  function deleteTodo(index) {
    console.log(index, "index");
    const copyList = [...list];
    copyList.splice(index, 1);
    setList(copyList);
  }

  function editTodo(index) {}
  return (
    <div className="App">
      <header className="App-header">
        <h4>TodoList App</h4>

        <input
          type="text"
          placeholder="Please input any text"
          onChange={updateText}
          value={inputText}
        ></input>
        <button type="button" onClick={addTodo}>
          Add Todo
        </button>

        <ul>
          {list.map(function (item, index) {
            return (
              <>
                <span>
                  <li key={index}>
                    {item}{" "}
                    <button type="button" onClick={() => deleteTodo(index)}>
                      Delete
                    </button>
                    <button type="button" onClick={() => editTodo(index)}>
                      Edit
                    </button>
                  </li>
                </span>
              </>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
