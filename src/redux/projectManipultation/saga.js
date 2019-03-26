import { takeEvery, put, all, fork, call } from 'redux-saga/effects';
import * as actions from "../projectManipultation/actionTypes";
import * as ProjectManipulationApi from "../projectManipultation/api";

const postProject= function* () {
  yield takeEvery(actions.POST_PROJECT, function* (newProject) {
    yield put({
      type : actions.POST_PROJECT_PENDING
    });
    
    const postProjectResponse = yield call(()=>{
      return ProjectManipulationApi.postProject(newProject);
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
      return ProjectManipulationApi.modifyProject(targetProject);
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
      return ProjectManipulationApi.deleteProject(projectId);
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

export default function* (){
  yield all([
    fork(postProject),
    fork(modifyProject),
    fork(deleteProject)
  ])
}