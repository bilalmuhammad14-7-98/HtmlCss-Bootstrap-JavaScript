import logo from "./logo.svg";
import "./App.css";
import Router from "./config/router";

function App() {
  return (
    <div className="App">
      <h1>Header</h1>

      <Router />

      <h1>Footer</h1>
    </div>
  );
}

export default App;
