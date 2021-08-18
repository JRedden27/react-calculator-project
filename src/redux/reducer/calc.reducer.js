import CalculatorBody from "../../components/CalculatorBody/CalculatorBody";

const initState = {
  output: "",
  toggle: "sci",
  prevNum: "",
  currNum: "",
  operator: "",
  buttonsStandard: [
    "(",
    ")",
    "%",
    "AC",
    "7",
    "8",
    "9",
    "÷",
    "4",
    "5",
    "6",
    "x",
    "3",
    "2",
    "1",
    "-",
    "0",
    ".",
    "=",
    "+",
  ],
  buttonsScientific: [
    "Rad",
    "Deg",
    "x!",
    "Inv",
    "sin",
    "ln",
    "π",
    "cos",
    "log",
    "e",
    "tan",
    "√",
    "Ans",
    "EXP",
    "x^y",
  ],
  ops: ["÷", "x", "-", "+", "%", ".", "(", ")"],
};

export const buttonReducer = (state = initState, action) => {
  switch (action.type) {
    case "BUTTON_PRESS":
      if (
        (state.ops.includes(action.payload) && state.output === "") ||
        (state.ops.includes(action.payload) &&
          state.ops.includes(state.output.slice(-1)))
      ) {
        return { ...state };
      } else {
        return { ...state, output: (state.output += action.payload) };
      }
    case "ALL_CLEAR":
      return { ...state, output: "" };
    case "ADD":
      return { ...state, prevNum: state.output, output: "", operator: "+" };
    case "SUBTRACT":
      return { ...state, prevNum: state.output, output: "", operator: "-" };
    case "MULTIPLY":
      return { ...state, prevNum: state.output, output: "", operator: "x" };
    case "DIVIDE":
      return { ...state, prevNum: state.output, output: "", operator: "÷" };
    case "PERCENT":
      return { ...state, prevNum: state.output, output: "", operator: "%" };
    case "EQUALS":
      if (state.operator === "+") {
        return {
          ...state,
          currNum: state.output,
          output: parseInt(state.prevNum) + parseInt(state.currNum),
        };
      } else if (state.operator === "-") {
        return {
          ...state,
          currNum: state.output,
          output: parseInt(state.prevNum) - parseInt(state.currNum),
        };
      } else if (state.operator === "x") {
        return {
          ...state,
          currNum: state.output,
          output: parseInt(state.prevNum) * parseInt(state.currNum),
        };
      } else if (state.operator === "÷") {
        return {
          ...state,
          currNum: state.output,
          output: parseInt(state.prevNum) / parseInt(state.currNum),
        };
      } else if (state.operator === "%") {
        return {
          ...state,
          currNum: state.output,
          output: parseInt(state.prevNum) * (parseInt(state.currNum) / 100),
        };
      }
    case "TOGGLE":
      if (state.mode === "sci") {
        return { ...state, mode: "sta" };
      } else {
        return { ...state, mode: "sci" };
      }
    default:
      return state;
  }
};
