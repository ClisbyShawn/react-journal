import React from "react";

const InputField = ({ name, label, type, ...rest }) => {
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
    </div>
  );
};

export default InputField;
