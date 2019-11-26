import { takeEvery, put, call } from 'redux-saga/effects';
import * as actions from './actionTypes';
import * as ProjectApi from '../api';

const getProjects = function* () {
  yield takeEvery(actions.GET_PROJECTS, function* ({ page, limit }) {
    yield put({
      type: actions.GET_PROJECTS_PENDING,
    });

    const getProjectsResponse = yield call(() => ProjectApi.getProjects(page, limit));

    if (getProjectsResponse.success === true) {
      yield put({
        type: actions.GET_PROJECTS_SUCCESS,
        projects: getProjectsResponse.projects,
        page,
        limit,
      });
    } else {
      yield put({
        type: actions.GET_PROJECTS_FAILURE,
      });
    }
  });
};

export default getProjects;
