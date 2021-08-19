import React from "react";
import "./Button.css";
import { useDispatch } from "react-redux";
import {
  buttonPress,
  allClear,
  add,
  subtract,
  multiply,
  divide,
  percent,
  equals,
  pi,
  factorial,
  powerOf,
  squareRoot,
} from "../../redux/action/calc.action";

function Button(props) {
  const dispatch = useDispatch();

  const buttonPressHandler = () => {
    dispatch(buttonPress(props.value));
  };

  const allClearHandler = () => {
    dispatch(allClear(props.value));
  };

  const addHandler = () => {
    dispatch(add(props.value));
  };

  const subtractHandler = () => {
    dispatch(subtract(props.value));
  };

  const multiplyHandler = () => {
    dispatch(multiply(props.value));
  };

  const divideHandler = () => {
    dispatch(divide(props.value));
  };

  const percentHandler = () => {
    dispatch(percent(props.value));
  };

  const equalsHandler = () => {
    dispatch(equals(props.value));
  };

  const piHandler = () => {
    dispatch(pi(props.value));
  };

  const factorialHandler = () => {
    dispatch(factorial(props.value));
  };

  const powerOfHandler = () => {
    dispatch(powerOf(props.value));
  };

  const squareRootHandler = () => {
    dispatch(squareRoot(props.value));
  };

  return (
    <div>
      {props.value === "AC" ? (
        <button type="button" onClick={allClearHandler}>
          {props.value}
        </button>
      ) : props.value === "+" ? (
        <button type="button" onClick={addHandler}>
          {props.value}
        </button>
      ) : props.value === "-" ? (
        <button type="button" onClick={subtractHandler}>
          {props.value}
        </button>
      ) : props.value === "x" ? (
        <button type="button" onClick={multiplyHandler}>
          {props.value}
        </button>
      ) : props.value === "÷" ? (
        <button type="button" onClick={divideHandler}>
          {props.value}
        </button>
      ) : props.value === "%" ? (
        <button type="button" onClick={percentHandler}>
          {props.value}
        </button>
      ) : props.value === "=" ? (
        <button type="button" onClick={equalsHandler}>
          {props.value}
        </button>
      ) : props.value === "π" ? (
        <button type="button" onClick={piHandler}>
          {props.value}
        </button>
      ) : props.value === "x!" ? (
        <button type="button" onClick={factorialHandler}>
          {props.value}
        </button>
      ) : props.value === "x^y" ? (
        <button type="button" onClick={powerOfHandler}>
          {props.value}
        </button>
      ) : props.value === "√" ? (
        <button type="button" onClick={squareRootHandler}>
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
