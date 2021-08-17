import React from "react";
import ButtonsStandard from "../ButtonsStandard/ButtonsStandard";
import Button from "../Button/Button";
import "./ButtonsScientific.css";

function ButtonsScientific() {
  return (
    <div>
      <div className="grid-container">
        <Button className="grid-item" value="Rad" />
        <Button className="grid-item" value="Deg" />
        <Button className="grid-item" value="x!" />

        <Button className="grid-item" value="Inv" />
        <Button className="grid-item" value="sin" />
        <Button className="grid-item" value="ln" />

        <Button className="grid-item" value="π" />
        <Button className="grid-item" value="cos" />
        <Button className="grid-item" value="log" />

        <Button className="grid-item" value="e" />
        <Button className="grid-item" value="tan" />
        <Button className="grid-item" value="√" />

        <Button className="grid-item" value="Ans" />
        <Button className="grid-item" value="EXP" />
        <Button className="grid-item" value="xy" />
      </div>
      <ButtonsStandard />
    </div>
  );
}

export default ButtonsScientific;
