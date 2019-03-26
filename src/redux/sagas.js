import { all } from 'redux-saga/effects';
import authSaga from './auth/saga';
import projectMainSaga from './projectMain/saga';
import projectViewSaga from './projectView/saga';
import projectManipulation from './projectManipultation/saga';

// Combine all sagas.
export default function* rootSaga (getState) {
  yield all([
    authSaga(),
    projectMainSaga(),
    projectViewSaga(),
    projectManipulation()
  ]);
};