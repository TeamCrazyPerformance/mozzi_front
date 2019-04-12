import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import * as UsersApi from './api';
import * as UsersActions from './actionTypes';

const getUsers = function*() {
  yield takeEvery(UsersActions.GET_USERS, function*({ page, limit }) {
    yield put({ type: UsersActions.GET_USERS_PENDING });

    const getResult = yield call(() => UsersApi.getUsers({ page, limit }));

    if(getResult.success === true) {
      yield put({
        type: UsersActions.GET_USERS_SUCCESS,
        users: getResult.users,
        page: getResult.page,
        count: getResult.count,
        total: getResult.total
      });
    } else {
      yield put({ type: UsersActions.GET_USERS_FAILURE });
    }
  });
};

export default function* usersSaga() {
  yield all([
    fork(getUsers)
  ]);
}