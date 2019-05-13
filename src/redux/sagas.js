import { all } from 'redux-saga/effects';
import authSaga from './auth/saga';
import projectMainSaga from './project/projectMain/saga';
import projectViewSaga from './project/projectView/saga';
import projectManipulation from './project/projectManipulation/saga';

// Combine all sagas.
export default function* rootSaga (getState) {
  yield all([
    authSaga(),
    projectMainSaga(),
    projectViewSaga(),
    projectManipulation()
  ]);
};