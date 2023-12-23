export const incrementAsync = () => ({
  type: "INCREMENT_ASYNC",
});

export const incrementByValueAsync = (curr: number, value: number) => ({
  type: "INCREMENT_BY_VALUE_ASYNC",
  payload: { curr, value },
});

export const decrementAsync = () => ({
  type: "DECREMENT_ASYNC",
});

export const decrementByValueAsync = (curr: number, value: number) => ({
  type: "DECREMENT_BY_VALUE_ASYNC",
  payload: { curr, value },
});

export const operationLoading = () => ({
  type: "OPERATION_LOADING",
});

export const operationSuccess = (value: number) => ({
  type: "OPERATION_SUCCESS",
  payload: value,
});

export const cancelOperation = () => ({
  type: "CANCEL_OPERATION",
});

export const setInput = (value: number) => ({
  type: "SET_INPUT",
  payload: value,
});
