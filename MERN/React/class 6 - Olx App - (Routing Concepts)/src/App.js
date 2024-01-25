import logo from "./logo.svg";
import "./App.css";
import Router from "./config/router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}

      <Router />

      <Footer />
    </div>
  );
}

export default App;
