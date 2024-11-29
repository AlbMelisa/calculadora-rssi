import React from "react";
import "./inputField.css";

const InputField = ({ mode,label, register, name, rules, pattern, errors }) => {
  return (
    <div className={`form-row ${mode} ${errors[name]?.message ? "input-error" : "margin-error"}`}>
      <div>
        <label>{label}:</label>
      </div>
      <div>
      <input {...register(name, rules)} />
      {errors[name]?.message && (
        <p className="error-message">{errors[name].message}</p>
      )}

      </div>
     
    </div>
  );
};

export default InputField;
