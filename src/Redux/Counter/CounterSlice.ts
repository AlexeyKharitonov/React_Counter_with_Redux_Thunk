import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  decrementAsync,
  decrementByValueAsync,
  incrementAsync,
  incrementByValueAsync,
} from "./CounterActions";
import { RootState } from "../CreateStore";

interface ICounterState {
  value: number;
  isLoading: boolean;
  input: number;
}

const addAsyncThunkCases = <T>(
  builder: ActionReducerMapBuilder<ICounterState>,
  asyncThunk: any,
  processFunction: (state: ICounterState, action: PayloadAction<T>) => void
) => {
  builder
    .addCase(asyncThunk.pending, (state: ICounterState) => {
      state.isLoading = true;
    })
    .addCase(asyncThunk.fulfilled, processFunction)
    .addCase(asyncThunk.rejected, (state: ICounterState) => {
      state.isLoading = false;
    });
};

const initialState: ICounterState = {
  value: 0,
  isLoading: false,
  input: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setInput: (state, action: PayloadAction<number>) => {
      state.input = action.payload;
    },
  },
  extraReducers: (builder) => {
    addAsyncThunkCases<number>(
      builder,
      incrementAsync,
      (state: ICounterState, action: PayloadAction<number>) => {
        state.value = action.payload;
        state.isLoading = false;
      }
    );
    addAsyncThunkCases<number>(builder, decrementAsync, (state, action) => {
      state.value = action.payload;
      state.isLoading = false;
    });
    addAsyncThunkCases<number>(
      builder,
      incrementByValueAsync,
      (state: ICounterState, action: PayloadAction<number>) => {
        state.value = action.payload;
        state.isLoading = false;
      }
    );
    addAsyncThunkCases<number>(
      builder,
      decrementByValueAsync,
      (state: ICounterState, action: PayloadAction<number>) => {
        state.value = action.payload;
        state.isLoading = false;
      }
    );
  },
});

const {
  reducer: counterReducer,
  actions: { setInput },
} = counterSlice;

export const getValue = (state: RootState) => state.counter.value;

export default counterReducer;
export { setInput };
