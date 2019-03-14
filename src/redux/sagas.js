import { all } from 'redux-saga/effects';
import authSaga from './auth/saga';
import projectSaga from './project/saga';

// Combine all sagas.
export default function* rootSaga (getState) {
  yield all([
    authSaga(),
    projectSaga()
  ]);
};