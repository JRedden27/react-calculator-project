import React from "react";
import Button from "../Button/Button";
import "./ButtonsStandard.css";
import { useSelector } from "react-redux";

function ButtonsStandard() {
  const buttons = useSelector((state) => state.buttonsStandard);
  const handlers = useSelector((state) => state.standardHandlers);

  return (
    <div className="grid-container-sta">
      {buttons.map((button, i) => (
        <Button key={i} value={button} idx={i} />
      ))}
    </div>
  );
}

export default ButtonsStandard;
