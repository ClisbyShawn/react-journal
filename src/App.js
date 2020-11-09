import React, { Component } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <LoginForm />
        <RegisterForm />
      </div>
    );
  }
}

export default App;
