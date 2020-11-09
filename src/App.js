import React, { Component } from "react";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <LoginForm />
      </div>
    );
  }
}

export default App;
