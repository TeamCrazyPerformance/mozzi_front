import { all, takeEvery, put, call, fork } from "redux-saga/effects";
import * as AuthApi from "./api";
import * as AuthActions from "./actionTypes";
import * as jwtHelper from "../../helpers/jwtHelper";
import * as userInformationHelper from "../../helpers/userInformationHelper";

const postSignIn = function* postSignIn() {
  yield takeEvery(AuthActions.POST_SIGN_IN, function* postSignInSaga({
    id,
    password
  }) {
    yield put({
      type: AuthActions.POST_SIGN_IN_PENDING
    });

    const getResult = yield call(() => AuthApi.postSignIn({ id, password }));

    if (getResult.success === true && getResult.token) {
      yield call(() => jwtHelper.setJwt(getResult.token));
      yield call(() => userInformationHelper.setUserId(id));
      yield put({
        type: AuthActions.UPDATE_USER_ID,
        userId: id
      });
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
    yield call(() => jwtHelper.clearJwt());
    yield call(() => userInformationHelper.clearUserId());
    yield put({
      type: AuthActions.SIGN_OUT_SUCCESS
    });
  });
};

const tokenRefresh = function* tokenRefresh() {
  yield takeEvery(AuthActions.TOKEN_REFRESH, function* signOutSaga() {
    const getResult = yield call(() => AuthApi.tokenRefresh());

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
        type: AuthActions.TOKEN_AUTH_ERROR
      });
    }
  });
};

const checkAuthorization = function* checkAuthorization() {
  yield takeEvery(
    AuthActions.CHECK_AUTHORIZATION,
    function* checkAuthorizationSaga() {
      const jwt = jwtHelper.getJwt();
      const userId = userInformationHelper.getUserId();
      const isAuthorization = jwtHelper.checkExpirity(jwt);

      if (isAuthorization.success) {
        // Check login state when the page refreshes.
        yield put({
          type: AuthActions.UPDATE_USER_ID,
          userId
        });
        if (isAuthorization.role === "admin") {
          yield put({ type: AuthActions.POST_SIGN_IN_SUCCESS_ADMIN });
        } else if (isAuthorization.role === "user") {
          yield put({ type: AuthActions.POST_SIGN_IN_SUCCESS_USER });
        }
      } else if (isAuthorization.timeoutError) {
        yield put({
          type: AuthActions.TOKEN_REFRESH
        });
      } else if (isAuthorization.error) {
        yield put({
          type: AuthActions.TOKEN_AUTH_ERROR
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
