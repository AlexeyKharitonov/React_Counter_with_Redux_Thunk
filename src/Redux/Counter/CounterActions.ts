import { createAsyncThunk } from "@reduxjs/toolkit";
import { makeOperation } from "../../api";
import { RootState } from "../CreateStore";

export const incrementAsync = createAsyncThunk<
  number,
  void,
  { state: RootState; rejectWithValue: string }
>("counter/increment", async (_, { getState, rejectWithValue }) => {
  try {
    const { value } = getState().counter;
    return makeOperation(value, 1);
  } catch (error) {
    console.log(`Ошибка incrementAsync ${error}`);
    return rejectWithValue("Ошибка при увеличении значения");
  }
});

export const decrementAsync = createAsyncThunk<
  number,
  void,
  { state: RootState }
>("counter/decrement", async (_, { getState, rejectWithValue }) => {
  try {
    const { value } = getState().counter;
    return makeOperation(value, -1);
  } catch (error) {
    console.log(`Ошибка decrementAsync ${error}`);
    return rejectWithValue("Ошибка при увеличении значения");
  }
});

export const incrementByValueAsync = createAsyncThunk<
  number,
  { value: number; input: number },
  { state: RootState }
>("counter/incrementByValue", async ({ value, input }, { rejectWithValue }) => {
  try {
    return makeOperation(value, input);
  } catch (error) {
    console.log(`Ошибка incrementByValueAsync ${error}`);
    return rejectWithValue("Ошибка при увеличении введенного значения");
  }
});

export const decrementByValueAsync = createAsyncThunk<
  number,
  { value: number; input: number },
  { state: RootState }
>("counter/decrementByValue", async ({ value, input }, { rejectWithValue }) => {
  try {
    return makeOperation(value, -input);
  } catch (error) {
    console.log(`Ошибка decrementByValueAsync ${error}`);
    return rejectWithValue("Ошибка при уменьшении введенного значения");
  }
});
