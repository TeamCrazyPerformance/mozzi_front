import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import * as JoinRequestApi from './api';
import * as actions from './actionTypes';

const getJoinRequestList = function*() {
  yield takeEvery(actions.GET_JOIN_REQUEST_LIST, function*({ limit, page, sort }) {
    yield put({ type: actions.GET_JOIN_REQUEST_LIST_PENDING });

    console.log('Page change', page);

    const getResult = yield call(() => JoinRequestApi.getJoinRequestList(limit, page, sort));

    if(getResult.success === true) {
      yield put({
        type: actions.GET_JOIN_REQUEST_LIST_SUCCESS,
        joinRequestList: getResult.users,
        page: getResult.page,
        count: getResult.count,
        total: getResult.total
      });
    } else {
      yield put({ type: actions.GET_JOIN_REQUEST_LIST_FAILURE });
    }
  });
};

const postJoinRequestApprove = function*() {
  yield takeEvery(actions.POST_JOIN_REQUEST_APPROVE, function*({ userId, limit, page, sort }) {
    yield put({ type: actions.POST_JOIN_REQUEST_APPROVE_PENDING });

    const getResult = yield call(() => JoinRequestApi.postJoinRequestApprove(userId));

    if(getResult.success === true) {
      yield put({ type: actions.POST_JOIN_REQUEST_APPROVE_SUCCESS });
      yield put({
        type: actions.GET_JOIN_REQUEST_LIST,
        limit: limit,
        page: page,
        sort: sort
      });
    } else {
      yield put({ type: actions.POST_JOIN_REQUEST_APPROVE_FAILURE });
    }
  });
};

const postJoinRequestReject = function*() {
  yield takeEvery(actions.POST_JOIN_REQUEST_REJECT, function*({ userId, limit, page, sort }) {
    yield put({ type: actions.POST_JOIN_REQUEST_REJECT_PENDING });

    const getResult = yield call(() => JoinRequestApi.postJoinRequestReject(userId));

    if(getResult.success === true) {
      yield put({ type: actions.POST_JOIN_REQUEST_REJECT_SUCCESS });
      yield put({
        type: actions.GET_JOIN_REQUEST_LIST,
        limit: limit,
        page: page,
        sort: sort
      });
    } else {
      yield put({ type: actions.POST_JOIN_REQUEST_REJECT_FAILURE });
    }
  });
};

export default function* joinRequestsSaga() {
  yield all([
    fork(getJoinRequestList),
    fork(postJoinRequestApprove),
    fork(postJoinRequestReject),
  ]);
}