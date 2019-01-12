import React, { Component } from "react";
import Quiz from "./Quiz";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Renshū</h1>
        </header>
        <Quiz />
      </div>
    );
  }
}

export default App;
