import * as actions from './actionTypes';

export const getProject = (projectId)=>{
  return {
    type : actions.GET_PROJECT,
    projectId : projectId
  }
};

export const getIssues = (projectId)=>{
  return {
    type : actions.GET_ISSUES,
    projectId : projectId
  }
};