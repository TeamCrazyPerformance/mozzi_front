import { all } from 'redux-saga/effects';
import authSaga from './auth/saga';

// Combine all sagas.
export default function* rootSaga (getState) {
  yield all([
    authSaga(),
  ]);
};