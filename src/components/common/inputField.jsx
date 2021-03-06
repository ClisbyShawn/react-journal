import React from "react";

const InputField = ({ name, label, type, errors, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        {...rest}
      />
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default InputField;
