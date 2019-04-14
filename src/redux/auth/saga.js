import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import * as AuthApi from './api';
import * as AuthActions from './actionTypes';
import * as jwtHelper from '../../helpers/jwtHelper';

const postSignIn = function*() {
  yield takeEvery(AuthActions.POST_SIGN_IN, function*({ identity, password }) {
    yield put({
      type: AuthActions.POST_SIGN_IN_PENDING
    });

    const userInformation = {
      identity: identity,
      password: password
    };

    const getResult = yield call(() => {
      return AuthApi.postSignIn(userInformation)
    });

    if(getResult.success === true && getResult.jwt) {
      yield call(() => jwtHelper.setJwt(getResult.jwt));
      yield put({
        type: AuthActions.POST_SIGN_IN_SUCCESS
      });
    } else {
      yield call(() => jwtHelper.clearJwt());
      yield put({
        type: AuthActions.POST_SIGN_IN_FAILURE,
      });
    }
  });
};

const signOut = function*() {
  yield takeEvery(AuthActions.SIGN_OUT, function*() {
    yield put({
      type: AuthActions.SIGN_OUT_PENDING
    });

    const clearJwtResult = yield call(() => {
      return jwtHelper.clearJwt()
    });

    if(clearJwtResult === true) {
      yield put({
        type: AuthActions.SIGN_OUT_SUCCESS,
      });
    } else {
      yield put({
        type: AuthActions.SIGN_OUT_FAILURE,
      })
    }
  });
};

const checkAuthorization = function*() {
  yield takeEvery(AuthActions.CHECK_AUTHORIZATION, function*() {
    const jwt = jwtHelper.getJwt();
    const isAuthorization = jwtHelper.checkExpirity(jwt);

    if(isAuthorization) {
      yield put({
        type: AuthActions.POST_SIGN_IN_SUCCESS
      });
    }
  });
};

export default function* authSaga() {
  yield all([
    fork(postSignIn),
    fork(signOut),
    fork(checkAuthorization)
  ]);
}