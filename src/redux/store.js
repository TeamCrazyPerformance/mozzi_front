import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import rootSaga from "./sagas";

// Register saga middleware.
const sagaMiddleware = createSagaMiddleware();
// Register router middleware.
const routeMiddleware = routerMiddleware();
// Combine saga middleware and router middleware.
const middlewares = [sagaMiddleware, routeMiddleware];

// Create store.
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  compose(applyMiddleware(...middlewares))
);

// Dynamically run saga.
sagaMiddleware.run(rootSaga);

export default store;
