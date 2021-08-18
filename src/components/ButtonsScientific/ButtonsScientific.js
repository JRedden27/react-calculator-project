import React from "react";
import ButtonsStandard from "../ButtonsStandard/ButtonsStandard";
import Button from "../Button/Button";
import "./ButtonsScientific.css";
import { useSelector } from "react-redux";

function ButtonsScientific({ buttonPress }) {
  const buttons = useSelector((state) => state.buttonsScientific);

  return (
    <div className="sci-body">
      <div className="grid-container-sci">
        {buttons.map((button, i) => (
          <Button key={i} value={button} idx={i} />
        ))}
      </div>
      <div className="grid-container">
        <ButtonsStandard />
      </div>
    </div>
  );
}

export default ButtonsScientific;
