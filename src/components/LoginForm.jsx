import React from "react";
import { toast } from "react-toastify";
import Form from "./common/Form";
import auth from "../services/authService";

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
    } catch (error) {
      const { name, message } = error.response.data;
      toast.error(`${name}: ${message}`);
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
