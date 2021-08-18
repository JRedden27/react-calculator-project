export const buttonPress = (value) => ({
  type: "BUTTON_PRESS",
  payload: value,
});

export const allClear = (value) => ({
  type: "ALL_CLEAR",
  payload: value,
});

export const equals = (value) => ({
  type: "EQUALS",
  payload: value,
});

export const toggle = (value) => ({
  type: "TOGGLE",
  payload: value,
});
