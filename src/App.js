import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Dashboard from "./components/Dashboard";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <ToastContainer />
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route
            path="/dashboard"
            render={() =>
              localStorage.getItem("tokenKey") ? <Dashboard /> : <LoginForm />
            }
          />
          <Redirect
            from="/"
            to={localStorage.getItem("tokenKey") ? "/dashboard" : "/login"}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
