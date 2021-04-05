import { all } from "redux-saga/effects";
import { albumsWatcher } from "./albumsSaga";
import { countWatcher } from "./countSaga";

export default function* rootSaga() {
  yield all([countWatcher(), albumsWatcher()]);
}
