import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../src/styles.css";

//Components
import Header from "./components/Header";
import JSON from "./db.json";
import NewsList from "./components/News_list";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: JSON
    };
  }

  render() {
    return (
      <div>
        <Header />
        <NewsList news={this.state.news} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
