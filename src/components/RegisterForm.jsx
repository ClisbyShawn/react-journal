import React from "react";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import Form from "./common/Form";
import auth from "../services/authService";
import errorService from "../services/errorService";

class RegisterForm extends Form {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().label("Name").required(),
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
      await auth.register(data);
      window.location = "/overview";
    } catch (error) {
      errorService.handleAuthErrors(error);
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Register Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInputField("name", "Name")}
          {this.renderInputField("email", "Email")}
          {this.renderInputField("password", "Password", "password")}
          {this.renderButton("Register")}
        </form>
        <Link to="/login">Already have an account? Login</Link>
      </div>
    );
  }
}

export default RegisterForm;
