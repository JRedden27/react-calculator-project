import React from "react";
import "./Toggle.css";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../redux/action/calc.action";

function Toggle() {
  const currMode = useSelector((state) => state.toggle);

  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggle(currMode));
  };

  return (
    <div>
      {currMode !== "sci" ? (
        <span style={{ color: "darkgray" }}>
          Standard |
          <span onClick={toggleHandler} style={{ color: "blue" }}>
            Scientific
          </span>
        </span>
      ) : (
        <span style={{ color: "darkgray" }}>
          <span onClick={toggleHandler} style={{ color: "blue" }}>
            Standard
          </span>
          | Scientific
        </span>
      )}
    </div>
  );
}

export default Toggle;
