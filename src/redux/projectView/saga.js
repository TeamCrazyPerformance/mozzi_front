import { takeEvery, put, call, all, fork} from 'redux-saga/effects';
import * as actions from './actionTypes';
import * as ProjectViewApi from './api';

const getProject = function* () {
  yield takeEvery(actions.GET_PROJECT, function* ({ projectId }) {
    yield put({
      type: actions.GET_PROJECT_PENDING
    });
    
    const getProjectResponse = yield call(()=> {
        return ProjectViewApi.getProject(projectId);
      }
    );
    
    if(getProjectResponse.success === true){
      yield put({
        type : actions.GET_PROJECT_SUCCESS,
        project : getProjectResponse.project
      })
    }
    else{
      yield put({
        type : actions.GET_PROJECT_FAILURE
      })
    }
  })
};

const getIssues = function* () {
  yield takeEvery(actions.GET_ISSUES, function* ({projectId}) {
    yield put({
      type : actions.GET_ISSUES_PENDING
    });
    
    const getIssuesResponse = yield call(()=>{
      return ProjectViewApi.getIssues(projectId);
    });
    
    if(getIssuesResponse.success === true){
      yield put({
        type : actions.GET_ISSUES_SUCCESS,
        issues : getIssuesResponse.issues
      });
    }
  })
};

export default function* (){
  yield all([
    fork(getProject),
    fork(getIssues)
  ])
}