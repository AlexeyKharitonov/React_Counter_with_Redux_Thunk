import { legacy_createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { reducer } from "./ducks/reducer";
import { rootSaga } from "./ducks/sagas";

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = legacy_createStore(reducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);

  return store;
};
