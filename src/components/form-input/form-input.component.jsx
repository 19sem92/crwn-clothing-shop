import React from "react";

import "./form-input.styles.scss";

const labelClasses = valueLength =>
  `${valueLength ? "shrink" : ""} form-input-label`;

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label className={labelClasses(otherProps.value.length)}>{label}</label>
    ) : null}
  </div>
);

export default FormInput;
