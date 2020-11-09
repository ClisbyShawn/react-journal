import React, { Component } from "react";
import InputField from "./inputField";
import Joi from "joi-browser";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  options = { abortEarly: false };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validateForm();
    this.setState({ errors });
    if (Object.keys(errors).length > 0) return;

    this.doSubmit();
  };

  handleOnChange = ({ target: input }) => {
    const { errors } = this.state;
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  validateForm = () => {
    const { error } = Joi.validate(this.state.data, this.schema, this.options);
    if (!error) return {};

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  validateProperty = ({ name, value }) => {
    const { error } = Joi.validate(
      { [name]: value },
      { [name]: this.schema[name] },
      this.options
    );
    if (!error) return null;
    return error.details[0].message;
  };

  renderInputField(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <div>
        <InputField
          name={name}
          label={label}
          type={type}
          errors={errors[name]}
          value={data[name]}
          onChange={this.handleOnChange}
        />
      </div>
    );
  }

  renderButton(name) {
    return (
      <button
        className="btn btn-primary"
        disabled={Object.keys(this.state.errors).length > 0}
        type="submit"
      >
        {name}
      </button>
    );
  }
}

export default Form;
