import React from "react";
import Form from "./common/Form";
import auth from "../services/authService";
import errorService from "../services/errorService";

class LoginForm extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  doSubmit = async () => {
    try {
      const { data: login } = this.state;
      await auth.login(login);
      window.location = "/dashboard";
    } catch (error) {
      errorService.handleNetworkError(error);
    }
  };

  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInputField("email", "Email")}
          {this.renderInputField("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
