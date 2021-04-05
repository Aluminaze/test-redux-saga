import { delay, put, takeEvery } from "redux-saga/effects";
import { incrementAC } from "../actions";
import { ASYNC_INCREMENT } from "../types";

function* incrementCount() {
  yield delay(1000);
  yield put(incrementAC());
}

export function* countWatcher() {
  yield takeEvery(ASYNC_INCREMENT, incrementCount);
}
