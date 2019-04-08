import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import * as JoinRequestApi from './api';
import * as JoinRequestsActions from './actionTypes';

const getJoinRequests = function*() {
  yield takeEvery(JoinRequestsActions.GET_JOIN_REQUESTS, function*({ limit, page, sort }) {
    yield put({ type: JoinRequestsActions.GET_JOIN_REQUESTS_PENDING });

    const getResult = yield call(() => JoinRequestApi.getJoinRequests({ limit, page, sort }));

    if(getResult.success === true) {
      yield put({
        type: JoinRequestsActions.GET_JOIN_REQUESTS_SUCCESS,
        joinRequests: getResult.users,
        page: getResult.page,
        count: getResult.count,
        total: getResult.total
      });
    } else {
      yield put({ type: JoinRequestsActions.GET_JOIN_REQUESTS_FAILURE });
    }
  });
};

const postJoinRequestApprove = function*() {
  yield takeEvery(JoinRequestsActions.POST_JOIN_REQUEST_APPROVE, function*({ userId, limit, page, sort }) {
    yield put({ type: JoinRequestsActions.POST_JOIN_REQUEST_APPROVE_PENDING });

    const getResult = yield call(() => JoinRequestApi.postJoinRequestApprove(userId));

    if(getResult.success === true) {
      yield put({ type: JoinRequestsActions.POST_JOIN_REQUEST_APPROVE_SUCCESS });
      yield put({
        type: JoinRequestsActions.GET_JOIN_REQUESTS,
        limit: limit,
        page: page,
        sort: sort
      });
    } else {
      yield put({ type: JoinRequestsActions.POST_JOIN_REQUEST_APPROVE_FAILURE });
    }
  });
};

const postJoinRequestReject = function*() {
  yield takeEvery(JoinRequestsActions.POST_JOIN_REQUEST_REJECT, function*({ userId, limit, page, sort }) {
    yield put({ type: JoinRequestsActions.POST_JOIN_REQUEST_REJECT_PENDING });

    const getResult = yield call(() => JoinRequestApi.postJoinRequestReject(userId));

    if(getResult.success === true) {
      yield put({ type: JoinRequestsActions.POST_JOIN_REQUEST_REJECT_SUCCESS });
      yield put({
        type: JoinRequestsActions.GET_JOIN_REQUESTS,
        limit: limit,
        page: page,
        sort: sort
      });
    } else {
      yield put({ type: JoinRequestsActions.POST_JOIN_REQUEST_REJECT_FAILURE });
    }
  });
};

export default function* joinRequestsSaga() {
  yield all([
    fork(getJoinRequests),
    fork(postJoinRequestApprove),
    fork(postJoinRequestReject)
  ]);
}