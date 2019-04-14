import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import * as userApi from './api';
import * as userActions from './actionTypes';

const getUser = function*() {
  yield takeEvery(userActions.GET_USER, function*({ userId }) {
    yield put({ type: userActions.GET_USER_PENDING });

    const getResult = yield call(() => userApi.getUser({ userId }));

    if(getResult === true) {
      yield put({
        type: userActions.GET_USER_SUCCESS,
        user: getResult.user
      });
    } else {
      yield put({ type: userActions.GET_USER_FAILURE });
    }
  });
}

export default function* userSaga() {
  yield all([
    fork(getUser)
  ]);
}