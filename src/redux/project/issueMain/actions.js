import * as actions from './actionTypes';

export const getIssues = projectId => ({
  type: actions.GET_ISSUES,
  projectId,
});
