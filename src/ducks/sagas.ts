import { put, take } from "redux-saga/effects";
import { operationLoading, operationSuccess } from "./actions";
import { makeOperation } from "../api";

function* increment({ payload }: any) {
  yield put(operationLoading());
  const res: any = makeOperation(payload, 1);
  yield put(operationSuccess(res));
}

function* decrment({ payload }: any) {
  yield put(operationLoading());
  const res: any = makeOperation(payload, -1);
  yield put(operationSuccess(res));
}

function* incrementByValue({ payload }: any) {
  yield put(operationLoading());
  const res: any = makeOperation(payload.curr, payload.value);
  yield put(operationSuccess(res));
}

function* decrementByValue({ payload }: any) {
  yield put(operationLoading());
  const res: any = makeOperation(payload.curr, -payload.value);
  yield put(operationSuccess(res));
}

export function* rootSaga() {
  yield take("INCREMENT_ASYNC", increment);
  yield take("DECREMENT_ASYNC", decrment);
  yield take("INCREMENT_BY_VALUE_ASYNC", incrementByValue);
  yield take("DECREMENT_BY_VALUE_ASYNC", decrementByValue);
}
