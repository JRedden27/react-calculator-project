import React from "react";
import "./InputField.css";
import { useSelector } from "react-redux";

function InputField() {
  const output = useSelector((state) => state.output);

  return <div>{output ? <p>{output}</p> : <p></p>}</div>;
}

export default InputField;
