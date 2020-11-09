import React from "react";
import Form from "./common/Form";
import auth from "../services/authService";
import errorService from "../services/errorService";
import Joi from "joi-browser";

class LoginForm extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string()
      .label("Email")
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net", "edu", "org"] },
      })
      .required(),
    password: Joi.string().label("Password").min(5).max(12).required(),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data);
      window.location = "/dashboard";
    } catch (error) {
      errorService.handleAuthErrors(error);
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
