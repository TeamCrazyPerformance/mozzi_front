import { takeEvery, put, call } from "redux-saga/effects";
import * as actions from "./actionTypes";
import * as ProjectApi from "../api";

const getProject = function*() {
  yield takeEvery(actions.GET_PROJECT, function*({ projectId }) {
    yield put({
      type: actions.GET_PROJECT_PENDING
    });

    const getProjectResponse = yield call(() =>
      ProjectApi.getProject(projectId)
    );

    if (getProjectResponse.success === true) {
      yield put({
        type: actions.GET_PROJECT_SUCCESS,
        project: getProjectResponse.project
      });
    } else {
      yield put({
        type: actions.GET_PROJECT_FAILURE
      });
    }
  });
};

export default getProject;
