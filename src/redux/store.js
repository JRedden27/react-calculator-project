import { createStore } from "redux";
import { buttonReducer } from "./reducer/calc.reducer";

const store = createStore(buttonReducer);

export default store;
