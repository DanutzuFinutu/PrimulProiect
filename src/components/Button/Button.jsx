import React from "react";
import "./Button.scss";

const Button = ({ type, children }) => (
  <button className={`button ${type}`}>
    {children}
  </button>
);

export default Button;
