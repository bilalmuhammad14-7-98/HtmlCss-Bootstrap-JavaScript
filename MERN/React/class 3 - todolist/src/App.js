import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [inputText, setInputText] = useState();
  const [updateBtn, setUpdateBtn] = useState(false);
  const [updatedIndex, setUpdatedIndex] = useState();

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
    setInputText("");
  }

  function deleteTodo(index) {
    console.log(index, "index");
    const copyList = [...list];
    copyList.splice(index, 1);
    setList(copyList);
    setInputText("");
  }

  function editTodo(index, item) {
    console.log(index, "index------");
    console.log(item, "item-----"); //
    setUpdatedIndex(index);
    setInputText(item);

    setUpdateBtn(true);
  }

  function updateTodo() {
    setUpdateBtn(false);
    console.log(inputText, "inputText");
    console.log(updatedIndex, "updated-index");
    if (inputText.length > 0) {
      const copyList = [...list];
      copyList.splice(updatedIndex, 1, inputText);
      setList(copyList);
      setInputText("");
    } else {
      alert("Please enter the todo");
    }
  }
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

        {updateBtn ? (
          <>
            <button type="button" onClick={updateTodo}>
              Update
            </button>
          </>
        ) : (
          <>
            <button type="button" onClick={addTodo}>
              Add Todo
            </button>
          </>
        )}

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
                    <button type="button" onClick={() => editTodo(index, item)}>
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
