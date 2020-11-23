import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../../css/styles.css'

class App extends Component {
  constructor() {
    super();

    this.state = { };
  }

  render() {
    return (
      <div className="welcome">
        <h1>react-webpack-babel-boilerplate ready for action!</h1>
      </div>
    );
  }
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;