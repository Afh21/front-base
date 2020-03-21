import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducers from "./reducers/index";
import rootSaga from "../redux/sagas/index";

const initialStore = {};
const initialSagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
   rootReducers,
   initialStore,
   composeEnhancers(applyMiddleware(initialSagaMiddleware))
);

initialSagaMiddleware.run(rootSaga);

export { store };
