import React from "react";

const baseHandler = (e) => {
  console.log(e);
};

const Button = ({ children, handler = baseHandler }) => {
  return (
    <button className="button" onClick={(e) => handler(e)}>
      {children || "ok"}
    </button>
  );
};

export default Button;
