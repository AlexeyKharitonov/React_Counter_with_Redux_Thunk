const initialState = {
  value: 0,
  isLoading: false,
  input: 0,
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_INPUT":
      state.input = action.payload;
      return state;
    case "OPERATION_LOADING":
      state.isLoading = true;
      return state;
    case "OPERATION_SUCCESS":
      state.value = action.payload;
      state.isLoading = false;
      return state;
    default:
      return state;
  }
};
