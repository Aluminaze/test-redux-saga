import { applyMiddleware, combineReducers, createStore } from "redux";
import { countReducer } from "./countReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/countSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  countReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
