import React from "react";
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

  doSubmit = async () => {
    try {
      const { data: registration } = this.state;
      await auth.register(registration);
      window.location = "/dashboard";
    } catch (error) {
      errorService.handleNetworkError(error);
    }
  };

  render() {
    return (
      <div>
        <h1>Register Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInputField("name", "Name")}
          {this.renderInputField("email", "Email")}
          {this.renderInputField("password", "Password", "password")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
