import React from "react";
import Toggle from "../Toggle/Toggle";
import InputField from "../InputField/InputField";
import ButtonsStandard from "../ButtonsStandard/ButtonsStandard";
import ButtonsScientific from "../ButtonsScientific/ButtonsScientific";
import { useSelector } from "react-redux";
import "./CalculatorBody.css";

function CalculatorBody() {
  const currMode = useSelector((state) => state.mode);

  return (
    <div className="body">
      <Toggle />
      <InputField />
      {currMode === "sta" ? <ButtonsStandard /> : <ButtonsScientific />}
    </div>
  );
}

export default CalculatorBody;
