import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div>
      <button type="button">{props.value}</button>
    </div>
  );
}

export default Button;
