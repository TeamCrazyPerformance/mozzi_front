import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import * as AuthApi from './api';
import * as actions from './actionTypes';
import * as jwtHelper from '../../helpers/jwtHelper';

const postSignIn = function*() {
  yield takeEvery(actions.POST_SIGN_IN, function*({ identity, password }) {
    yield put({
      type: actions.POST_SIGN_IN_PENDING
    });

    const userInformation = {
      identity: identity,
      password: password
    };

    const getResult = yield call(() => {
      return AuthApi.postSignIn(userInformation)
    });

    if(getResult.success === true && getResult.jwt) {
      // Set jwt to web browser local storage.
      yield call(() => jwtHelper.setJwt(getResult.jwt));
      yield put({
        type: actions.POST_SIGN_IN_SUCCESS
      });
    } else {
      // SignIn failure.
      yield call(() => jwtHelper.clearJwt());
      yield put({
        type: actions.POST_SIGN_IN_FAILURE,
      });
    }
  });
};

const signOut = function*() {
  yield takeEvery(actions.SIGN_OUT, function*() {
    yield put({
      // Dispatch action to reducer.
      type: actions.SIGN_OUT_PENDING
    });

    const clearJwtResult = yield call(() => {
      // Remove jwt from browser local storage.
      return jwtHelper.clearJwt()
    });

    if(clearJwtResult === true) {
      // SignOut success.
      yield put({
        type: actions.SIGN_OUT_SUCCESS,
      });
    } else {
      // SignOut failure.
      yield put({
        type: actions.SIGN_OUT_FAILURE,
      })
    }
  });
};

export default function* authSaga() {
  yield all([
    fork(postSignIn),
    fork(signOut)
  ]);
}