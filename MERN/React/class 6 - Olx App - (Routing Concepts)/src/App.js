import logo from "./logo.svg";
import "./App.css";
import Router from "./config/router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Router />

      <h1>Footer</h1>
    </div>
  );
}

export default App;
