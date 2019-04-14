import * as actions from './actionTypes';

export const getProject = projectId => ({
  type: actions.GET_PROJECT,
  projectId,
});

export const getIssues = projectId => ({
  type: actions.GET_ISSUES,
  projectId,
});
