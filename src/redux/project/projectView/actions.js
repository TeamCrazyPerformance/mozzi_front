import * as actions from './actionTypes';

export const getProject = projectId => ({
  type: actions.GET_PROJECT,
  projectId,
});

