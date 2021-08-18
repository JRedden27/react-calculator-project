import React from "react";
import "./Toggle.css";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../redux/action/calc.action";

function Toggle() {
  const currMode = useSelector((state) => state.mode);

  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggle(currMode));
  };

  return (
    <div>
      {currMode === "sta" ? (
        <span style={{ color: "darkgray" }}>
          Standard |{" "}
          <a onClick={toggleHandler} style={{ color: "blue" }}>
            Scientific
          </a>
        </span>
      ) : (
        <span style={{ color: "darkgray" }}>
          <a onClick={toggleHandler} style={{ color: "blue" }}>
            Standard
          </a>{" "}
          | Scientific
        </span>
      )}
    </div>
  );
}

export default Toggle;
