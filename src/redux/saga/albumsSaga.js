import { put, call, takeEvery, delay } from "redux-saga/effects";
import axios from "axios";
import { addAlbumsAC } from "../actions";
import { FETCH_ALBUMS } from "../types";

function* getAlbums() {
  yield delay(2000);
  try {
    const response = yield call(axios.get, [
      "https://jsonplaceholder.typicode.com/albums",
    ]);
    yield put(addAlbumsAC(response.data));
  } catch (error) {
    console.error(`Произошла ошибка при получении альбомов: ${error.message}`);
  }
}

export function* albumsWatcher() {
  yield takeEvery(FETCH_ALBUMS, getAlbums);
}
