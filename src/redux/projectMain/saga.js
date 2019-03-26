import { takeEvery, put, call } from 'redux-saga/effects';
import * as actions from './actionTypes';
import * as ProjectMainApi from './api'

const getProjects = function* () {
  yield takeEvery(actions.GET_PROJECTS, function* () {
    yield put({
      type: actions.GET_PROJECTS_PENDING
    });
    
    const getProjectsResponse = yield call(()=> {
        return ProjectMainApi.getProjects();
      }
    );
    
    if(getProjectsResponse.success === true){
      yield put({
        type : actions.GET_PROJECTS_SUCCESS,
        projects : getProjectsResponse.projects
      })
    }
    else{
      yield put({
        type : actions.GET_PROJECTS_FAILURE
      })
    }
  })
};

export default getProjects;