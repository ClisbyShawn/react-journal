import React from "react";
import Form from "./common/Form";

class RegisterForm extends Form {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
    },
    errors: {},
  };

  doSubmit = () => {
    console.log("Register me in the system...");
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
