import * as actions from './actionTypes';

export const postProject = ({ newProject }) => ({
  type: actions.POST_PROJECT,
  newProject,
});

export const modifyProject = ({ projectId, replaceProject }) => ({
  type: actions.MODIFY_PROJECT,
  projectId,
  replaceProject,
});

export const deleteProject = ({ projectId }) => ({
  type: actions.DELETE_PROJECT,
  projectId,
});
