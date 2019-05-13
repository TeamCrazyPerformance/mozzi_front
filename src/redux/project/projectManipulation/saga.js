import {
  takeEvery, put, all, fork, call,
} from 'redux-saga/effects';
import * as actions from './actionTypes';
import * as ProjectApi from '../api';

const postProject = function* () {
  yield takeEvery(actions.POST_PROJECT, function* ({ newProject }) {
    yield put({
      type: actions.POST_PROJECT_PENDING,
    });

    const postProjectResponse = yield call(() => ProjectApi.postProject(newProject));

    if (postProjectResponse.success === true) {
      yield put({
        type: actions.POST_PROJECT_SUCCESS,
      });
    } else {
      yield put({
        type: actions.POST_PROJECT_FAILURE,
      });
    }
  });
};

const modifyProject = function* () {
  yield takeEvery(actions.MODIFY_PROJECT, function* ({ projectId, targetProject }) {
    yield put({
      type: actions.MODIFY_PROJECT_PENDING,
    });

    const modifyProjectResponse = yield call(() => ProjectApi.modifyProject(targetProject));

    if (modifyProjectResponse.success === true) {
      yield put({
        type: actions.MODIFY_PROJECT_SUCCESS,
      });
    } else {
      yield put({
        type: actions.MODIFY_PROJECT_FAILURE,
      });
    }
  });
};

const deleteProject = function* () {
  yield takeEvery(actions.DELETE_PROJECT, function* ({ projectId }) {
    console.log(projectId);
    yield put({
      type: actions.DELETE_PROJECT_PENDING,
    });

    const deleteProjectResponse = yield call(() => ProjectApi.deleteProject(projectId));

    if (deleteProjectResponse.success === true) {
      yield put({
        type: actions.DELETE_PROJECT_SUCCESS,
      });
    } else {
      yield put({
        type: actions.DELETE_PROJECT_FAILURE,
      });
    }
  });
};

export default function* () {
  yield all([
    fork(postProject),
    fork(modifyProject),
    fork(deleteProject),
  ]);
}
