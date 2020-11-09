import React, { Component } from "react";
import InputField from "./inputField";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.doSubmit();
  };

  handleOnChange = ({ target: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data });
  };

  renderInputField(name, label, type = "text") {
    const { data } = this.state;
    return (
      <div>
        <InputField
          name={name}
          label={label}
          type={type}
          value={data[name]}
          onChange={this.handleOnChange}
        />
      </div>
    );
  }

  renderButton(name) {
    return (
      <button className="btn btn-primary" type="submit">
        {name}
      </button>
    );
  }
}

export default Form;
