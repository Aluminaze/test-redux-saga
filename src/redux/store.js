import { applyMiddleware, combineReducers, createStore } from "redux";
import { countReducer } from "./countReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/rootSaga";
import { albumsReducer } from "./albumsReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  countReducer,
  albumsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
