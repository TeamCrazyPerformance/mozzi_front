import { takeEvery, put, call } from "redux-saga/effects";
import * as actions from "./actionTypes";
import * as ProjectApi from "../api";

const getIssues = function*() {
  yield takeEvery(actions.GET_ISSUES, function*({ projectId }) {
    yield put({
      type: actions.GET_ISSUES_PENDING
    });

    const getIssuesResponse = yield call(() => ProjectApi.getIssues(projectId));

    if (getIssuesResponse.success === true) {
      yield put({
        type: actions.GET_ISSUES_SUCCESS,
        issues: getIssuesResponse.issues
      });
    }
  });
};

export default getIssues;
