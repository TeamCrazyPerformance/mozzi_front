import * as actions from "./actionTypes";

export const postProject = ({ newProject }) => ({
  type: actions.POST_PROJECT,
  newProject
});

export const modifyProject = ({ projectId, replaceProject }) => ({
  type: actions.MODIFY_PROJECT,
  projectId,
  replaceProject
});

export const deleteProject = ({ projectId }) => ({
  type: actions.DELETE_PROJECT,
  projectId
});

export const setProjectName = ({ name }) => ({
  type: actions.SET_PROJECT_NAME,
  name
});

export const setProjectContent = ({ content }) => ({
  type: actions.SET_PROJECT_CONTENT,
  content
});

export const setProjectIsPublic = ({ isPublic }) => ({
  type: actions.SET_PROJECT_ISPUBLIC,
  isPublic
});

export const setProjectMembers = ({ members }) => ({
  type: actions.SET_PROJECT_MEMBERS,
  members
});

export const setProjectStack = ({ stack }) => ({
  type: actions.SET_PROJECT_STACK,
  stack
});
