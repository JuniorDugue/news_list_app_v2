import React from "react";
import ReactDOM from "react-dom";

//Components
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello World</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
