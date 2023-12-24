import { createAsyncThunk } from "@reduxjs/toolkit";
import { makeOperation } from "../../api";
import { RootState } from "../CreateStore";

export const incrementAsync = createAsyncThunk<
  number,
  void,
  { state: RootState }
>("counter/increment", async (_, { getState }) => {
  const { value } = getState().counter;
  return makeOperation(value, 1);
});

export const decrementAsync = createAsyncThunk<
  number,
  void,
  { state: RootState }
>("counter/decrement", async (_, { getState }) => {
  const { value } = getState().counter;
  return makeOperation(value, -1);
});

export const incrementByValueAsync = createAsyncThunk<
  number,
  { value: number; input: number },
  { state: RootState }
>("counter/incrementByValue", async ({ value, input }) => {
  return makeOperation(value, input);
});

export const decrementByValueAsync = createAsyncThunk<
  number,
  { value: number; input: number },
  { state: RootState }
>("counter/decrementByValue", async ({ value, input }) => {
  return makeOperation(value, -input);
});
