import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Overview from "./components/Overview";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <ToastContainer />
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route
            path="/overview"
            render={() =>
              localStorage.getItem("tokenKey") ? <Overview /> : <LoginForm />
            }
          />
          <Redirect
            from="/"
            to={
              localStorage.getItem("tokenKey")
                ? "/overview/dashboard"
                : "/login"
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
