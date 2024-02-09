import logo from "./logo.svg";
import "./App.css";
import Router from "./config/router";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Router />
      </div>
    </Provider>
  );
}

export default App;
