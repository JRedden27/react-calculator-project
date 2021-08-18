import React from "react";
import "./Button.css";
import { useDispatch } from "react-redux";
import { buttonPress, allClear, equals } from "../../redux/action/calc.action";

function Button(props) {
  const dispatch = useDispatch();

  const buttonPressHandler = () => {
    dispatch(buttonPress(props.value));
  };

  const allClearHandler = () => {
    dispatch(allClear(props.value));
  };

  const equalsHandler = () => {
    dispatch(equals(props.value));
  };

  return (
    <div>
      {props.value === "AC" ? (
        <button type="button" onClick={allClearHandler}>
          {props.value}
        </button>
      ) : props.value === "=" ? (
        <button type="button" onClick={equalsHandler}>
          {props.value}
        </button>
      ) : (
        <button type="button" onClick={buttonPressHandler}>
          {props.value}
        </button>
      )}
    </div>
  );
}

export default Button;
