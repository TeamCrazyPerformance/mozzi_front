import { all } from "redux-saga/effects";
import authSaga from "./auth/saga";
import projectMainSaga from "./project/projectMain/saga";
import projectViewSaga from "./project/projectView/saga";
import projectManipulationSaga from "./project/projectManipulation/saga";
import issueMainSaga from "./project/issueMain/saga";

// Combine all sagas.
export default function* rootSaga(getState) {
  yield all([
    authSaga(),
    projectMainSaga(),
    projectViewSaga(),
    projectManipulationSaga(),
    issueMainSaga()
  ]);
}
