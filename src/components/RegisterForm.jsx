import React from "react";
import { toast } from "react-toastify";
import Form from "./common/Form";
import auth from "../services/authService";

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
    } catch (error) {
      const { name, message } = error.response.data;
      toast.error(`${name}: ${message}`);
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
