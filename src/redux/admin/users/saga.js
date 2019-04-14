import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import * as usersApi from './api';
import * as usersActions from './actionTypes';

const getUsers = function*() {
  yield takeEvery(usersActions.GET_USERS, function*({ page, limit }) {
    yield put({ type: usersActions.GET_USERS_PENDING });

    const getResult = yield call(() => usersApi.getUsers({ page, limit }));

    if(getResult.success === true) {
      yield put({
        type: usersActions.GET_USERS_SUCCESS,
        users: getResult.users,
        page: getResult.page,
        count: getResult.count,
        total: getResult.total
      });
    } else {
      yield put({ type: usersActions.GET_USERS_FAILURE });
    }
  });
}

export default function* usersSaga() {
  yield all([
    fork(getUsers)
  ]);
}