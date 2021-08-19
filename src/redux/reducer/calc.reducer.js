const initState = {
  output: "",
  toggle: "sta",
  prevNum: "",
  currNum: "",
  operator: "",
  answer: "",
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
  ops: ["÷", "x", "-", "+", "%", ".", "(", ")", "x^y", "log"],
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
    case "SIN":
      return { ...state, prevNum: state.output, output: "", operator: "sin" };
    case "COS":
      return { ...state, prevNum: state.output, output: "", operator: "cos" };
    case "TAN":
      return { ...state, prevNum: state.output, output: "", operator: "tan" };
    case "POWER_OF":
      return { ...state, prevNum: state.output, output: "", operator: "x^y" };
    case "EQUALS":
      if (state.operator === "+") {
        return {
          ...state,
          currNum: state.output,
          output: parseInt(state.prevNum) + parseInt(state.currNum),
          answer: parseInt(state.prevNum) + parseInt(state.currNum),
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
      } else if (state.operator === "sin") {
        return {
          ...state,
          currNum: state.output,
          output: Math.sin(parseInt(state.prevNum), parseInt(state.currNum)),
        };
      } else if (state.operator === "cos") {
        return {
          ...state,
          currNum: state.output,
          output: Math.cos(parseInt(state.prevNum), parseInt(state.currNum)),
        };
      } else if (state.operator === "tan") {
        return {
          ...state,
          currNum: state.output,
          output: Math.tan(parseInt(state.prevNum), parseInt(state.currNum)),
        };
      } else if (state.operator === "x^y") {
        return {
          ...state,
          currNum: state.output,
          output: Math.pow(parseInt(state.prevNum), parseInt(state.currNum)),
        };
      } else {
        return state;
      }
    case "PI":
      return { ...state, output: Math.PI };
    case "EULER":
      return { ...state, output: Math.E };
    case "ANSWER":
      return { ...state, output: state.currNum };
    case "FACTORIAL":
      let result = parseInt(state.output);
      let nextNum = result;
      while (nextNum > 1) {
        nextNum--;
        result *= nextNum;
      }
      return { ...state, output: result };
    case "SQUARE_ROOT":
      return { ...state, output: Math.sqrt(state.output) };
    case "LOG":
      return { ...state, output: Math.log10(state.output) };
    case "NAT_LOG":
      return { ...state, output: Math.log(state.output) };
    case "TOGGLE":
      if (state.toggle === "sta") {
        return { ...state, toggle: "sci" };
      } else {
        return { ...state, toggle: "sta" };
      }
    default:
      return state;
  }
};
