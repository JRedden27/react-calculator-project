import React from "react";
import Button from "../Button/Button";
import "./ButtonsStandard.css";

function ButtonsStandard() {
  return (
    <div className="grid-container">
      <Button className="grid-item" value="(" />
      <Button className="grid-item" value=")" />
      <Button className="grid-item" value="%" />
      <Button className="grid-item" value="AC" />

      <Button className="grid-item" value="7" />
      <Button className="grid-item" value="8" />
      <Button className="grid-item" value="9" />
      <Button className="grid-item" value="÷" />

      <Button className="grid-item" value="4" />
      <Button className="grid-item" value="5" />
      <Button className="grid-item" value="6" />
      <Button className="grid-item" value="x" />

      <Button className="grid-item" value="1" />
      <Button className="grid-item" value="2" />
      <Button className="grid-item" value="3" />
      <Button className="grid-item" value="-" />

      <Button className="grid-item" value="0" />
      <Button className="grid-item" value="." />
      <Button className="grid-item" value="=" />
      <Button className="grid-item" value="+" />
    </div>
  );
}

export default ButtonsStandard;
