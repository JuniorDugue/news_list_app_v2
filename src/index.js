import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//Components
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      Hello World
      <Header />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
