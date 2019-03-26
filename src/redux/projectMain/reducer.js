import * as actions from './actionTypes';

const projectMainInitialState = {
  projects : [],
  loadingState : {
    getProjects : false
  }
};

const projectMainReducer = (state = projectMainInitialState, action)=>{
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

    default :
      return state;
  }
};

export default projectMainReducer;