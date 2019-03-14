import * as actions from './actionTypes';

const projectInitialState = {
  projects : null,
  loadingState : {
    getProjects : false,
    postProject : false,
    modifyProject : false,
    deleteProject : false
  }
};

const projectReducer = (state = projectInitialState, action)=>{
  switch (action.type) {
    case actions.GET_PROJECTS_PENDING : {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          getProjects: true
        }
      }
    }
  
    case actions.GET_PROJECTS_SUCCESS : {
      return {
        ...state,
        projects : action.projects,
        loadingState: {
          ...state.loadingState,
          getProjects: false
        }
      }
    }
  
    case actions.GET_PROJECTS_FAILURE : {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          getProjects: false
        }
      }
    }
  
    case actions.POST_PROJECT_PENDING : {
      return {
        ...state,
        loadingState:{
          ...state.loadingState,
          postProject: true
        }
      }
    }
    case actions.POST_PROJECT_SUCCESS : {
      return {
        ...state,
        loadingState:{
          ...state.loadingState,
          postProject: false
        }
      }
    }
    case actions.POST_PROJECT_FAILURE : {
      return {
        ...state,
        loadingState:{
          ...state.loadingState,
          postProject: false
        }
      }
    }
  
    case actions.MODIFY_PROJECT_PENDING : {
      return {
        ...state,
        loadingState:{
          ...state.loadingState,
          modifyProject: true
        }
      }
    }
    case actions.MODIFY_PROJECT_SUCCESS : {
      return {
        ...state,
        loadingState:{
          ...state.loadingState,
          modifyProject: false
        }
      }
    }
    case actions.MODIFY_PROJECT_FAILURE : {
      return {
        ...state,
        loadingState:{
          ...state.loadingState,
          modifyProject: false
        }
      }
    }
    
    case actions.DELETE_PROJECT_PENDING : {
      return{
        ...state,
        loadingState:{
          ...state.loadingState,
          deleteProject: true
        }
      }
    }
  
    case actions.DELETE_PROJECT_SUCCESS : {
      return{
        ...state,
        loadingState:{
          ...state.loadingState,
          deleteProject: false
        }
      }
    }
    
    case actions.DELETE_PROJECT_FAILURE : {
      return{
        ...state,
        loadingState:{
          ...state.loadingState,
          deleteProject: false
        }
      }
    }
  }
};