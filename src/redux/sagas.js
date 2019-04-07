import { all } from 'redux-saga/effects';
import authSaga from './auth/saga';
import adminJoinRequestSaga from './admin/joinRequests/saga';
import examGetRequestSage from './Exam/ExamTable/saga';

// Combine all sagas.
export default function* rootSaga (getState) {
  yield all([
    authSaga(),
    adminJoinRequestSaga(),
    examGetRequestSage(),
  ]);
};