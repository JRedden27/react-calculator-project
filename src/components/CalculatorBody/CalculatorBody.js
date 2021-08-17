import React from "react";
import Toggle from "../Toggle/Toggle";
import InputField from "../InputField/InputField";
import ButtonsStandard from "../ButtonsStandard/ButtonsStandard";
// import ButtonsScientific from "../ButtonsScientific/ButtonsScientific";
import "./CalculatorBody.css";

function CalculatorBody() {
  return (
    <div className="body">
      <Toggle />
      <InputField />
      <ButtonsStandard />
    </div>
  );
}

export default CalculatorBody;
