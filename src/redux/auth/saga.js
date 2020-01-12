import { all, takeEvery, put, call, fork } from "redux-saga/effects";
import * as AuthApi from "./api";
import * as AuthActions from "./actionTypes";
import * as jwtHelper from "../../helpers/jwtHelper";

const postSignIn = function* postSignIn() {
  yield takeEvery(AuthActions.POST_SIGN_IN, function* postSignInSaga({
    id,
    password
  }) {
    yield put({
      type: AuthActions.POST_SIGN_IN_PENDING
    });

    const userInformation = {
      id,
      password
    };

    const getResult = yield call(() => AuthApi.postSignIn(userInformation));

    if (getResult.success === true && getResult.token) {
      yield call(() => jwtHelper.setJwt(getResult.token));

      if (getResult.role === "admin") {
        yield put({
          type: AuthActions.POST_SIGN_IN_SUCCESS_ADMIN
        });
      } else if (getResult.role === "user") {
        yield put({
          type: AuthActions.POST_SIGN_IN_SUCCESS_USER
        });
      }
    } else {
      yield call(() => jwtHelper.clearJwt());
      yield put({
        type: AuthActions.POST_SIGN_IN_FAILURE
      });
    }
  });
};

const signOut = function* signOut() {
  yield takeEvery(AuthActions.SIGN_OUT, function* signOutSaga() {
    const clearJwtResult = yield call(() => jwtHelper.clearJwt());

    if (clearJwtResult === true) {
      yield put({
        type: AuthActions.SIGN_OUT_SUCCESS
      });
    } else {
      yield put({
        type: AuthActions.SIGN_OUT_FAILURE
      });
    }
  });
};

const tokenRefresh = function* tokenRefresh() {
  yield takeEvery(AuthActions.TOKEN_REFRESH, function* signOutSaga() {
    const getResult = yield call(() => AuthApi.postSignIn());

    if (getResult.success === true && getResult.token) {
      yield call(() => jwtHelper.setJwt(getResult.token));

      if (getResult.role === "admin") {
        yield put({
          type: AuthActions.POST_SIGN_IN_SUCCESS_ADMIN
        });
      } else if (getResult.role === "user") {
        yield put({
          type: AuthActions.POST_SIGN_IN_SUCCESS_USER
        });
      }
    } else {
      yield call(() => jwtHelper.clearJwt());
      yield put({
        type: AuthActions.POST_SIGN_IN_FAILURE
      });
    }
  });
};

const checkAuthorization = function* checkAuthorization() {
  yield takeEvery(
    AuthActions.CHECK_AUTHORIZATION,
    function* checkAuthorizationSaga() {
      const jwt = jwtHelper.getJwt();
      const isAuthorization = jwtHelper.checkExpirity(jwt);

      if (isAuthorization.timeoutError) {
        yield put({
          type: AuthActions.TOKEN_REFRESH
        });
      } else if (isAuthorization.error) {
        yield put({
          type: AuthActions.POST_SIGN_IN_FAILURE
        });
      }
    }
  );
};

export default function* authSaga() {
  yield all([
    fork(postSignIn),
    fork(signOut),
    fork(tokenRefresh),
    fork(checkAuthorization)
  ]);
}
