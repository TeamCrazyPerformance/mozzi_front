import { all } from 'redux-saga/effects';
import authSaga from './auth/saga';
import adminJoinRequestsSaga from './admin/joinRequests/saga';
import adminUsersSaga from './admin/users/saga';

// Combine all sagas.
export default function* rootSaga (getState) {
  yield all([
    authSaga(),
    adminJoinRequestsSaga(),
    adminUsersSaga(),
  ]);
};