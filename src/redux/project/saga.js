import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import * as actions from './actionTypes';
import * as ProjectApi from './api'

const getProjects = function* () {
  yield takeEvery(actions.GET_PROJECTS, function* () {
    yield put({
      type: actions.GET_PROJECTS_PENDING
    });
    
    const getProjectsResponse = yield call(()=> {
        return ProjectApi.getProjects();
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

const postProject= function* () {
  yield takeEvery(actions.POST_PROJECT, function* (newProject) {
    yield put({
      type : actions.POST_PROJECT_PENDING
    });
    
    const postProjectResponse = yield call(()=>{
      return ProjectApi.postProject(newProject);
    });
    
    if(postProjectResponse.success === true){
      yield put({
        type : actions.POST_PROJECT_SUCCESS
      })
    }
    else{
      yield put({
        type : actions.POST_PROJECT_FAILURE
      })
    }
  })
};

const modifyProject= function* () {
  yield takeEvery(actions.MODIFY_PROJECT, function* (targetProject) {
    yield put({
      type : actions.MODIFY_PROJECT_PENDING
    });
    
    const modifyProjectResponse = yield call(()=>{
      return ProjectApi.modifyProject(targetProject);
    });
    
    if(modifyProjectResponse.success === true){
      yield put({
        type : actions.MODIFY_PROJECT_SUCCESS
      })
    }
    else{
      yield put({
        type : actions.MODIFY_PROJECT_FAILURE
      })
    }
  })
};

const deleteProject = function* () {
  yield takeEvery(actions.DELETE_PROJECT, function *(projectId){
    yield put({
      type : actions.DELETE_PROJECT_PENDING
    });
    
    const deleteProjectResponse = yield call(()=>{
      return ProjectApi.deleteProject(projectId);
    });
    
    if(deleteProjectResponse.success === true){
      yield put({
        type : actions.DELETE_PROJECT_SUCCESS
      })
    }
    else{
      yield put({
        type : actions.DELETE_PROJECT_FAILURE
      })
    }
  })
};

export default function* authSaga() {
  yield all([
    fork(getProjects),
    fork(postProject),
    fork(modifyProject),
    fork(deleteProject)
  ]);
}