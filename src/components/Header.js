import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "The keywords are: ",
      keywords: ""
    };
  }

  inputChange() {
    this.setState({ keywords: event.target.value });
  }

  render() {
    return (
      <header className="header">
        <div className="logo" onClick={() => console.log("click")}>
          Logo
        </div>
        <input onChange={this.inputChange.bind(this)} />
        <div>{this.state.title}</div>
        <div>{this.state.keywords}</div>
      </header>
    );
  }
}

export default Header;
