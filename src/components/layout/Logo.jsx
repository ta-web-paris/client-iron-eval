import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/logo.css";

const Logo = () => {
  return (
    <span className="logo">
      <Link to="/">IronEval</Link>
    </span>
  );
};

export default Logo;
