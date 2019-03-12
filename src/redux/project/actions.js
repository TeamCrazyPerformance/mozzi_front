import * as actions from 'actionTypes'

export const getProjectList = () => {
  return {
    type: actions.GET_PROJECT_LIST
  }
};

export const postProject = ({name, content, isPublic}) => {
  return {
    type : actions.POST_PROJECT,
    name : name,
    content : content,
    isPublic : isPublic
  }
};

export const modifyProject = ({projectId, name, content, stack, isPublic}) => {
  return {
    type : actions.MODIFY_PROJECT,
    projectId : projectId,
    name : name,
    content : content,
    stack : stack,
    isPublic : isPublic
  }
};

export const deleteProject = ({projectId}) => {
  return {
    type : actions.DELETE_PROJECT,
    projectId : projectId
  }
};

export const getProjectView = ({projectId}) => {
  return {
    type : 'GET_PROJECT_VIEW',
    projectId : projectId
  }
};