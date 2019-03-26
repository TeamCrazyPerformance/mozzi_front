import * as actions from "../projectView/actionTypes";

const projectViewInitialState = {
  project : {
    name : '',
    content : '',
    members : ''
  },
  issues : [],
  loadingState : {
    getProject : false,
    getIssues : false
  }
};


const projectViewReducer = (state=projectViewInitialState, action) => {
  switch (action.type) {
      case actions.GET_PROJECT_PENDING : {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          getProject: true
        }
      }
    }
  
    case actions.GET_PROJECT_SUCCESS : {
      return {
        ...state,
        project : action.project,
        loadingState: {
          ...state.loadingState,
          getProject: false
        }
      }
    }
  
    case actions.GET_PROJECT_FAILURE : {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          getProject: false
        }
      }
    }
    
    case actions.GET_ISSUES_PENDING : {
      return {
        ...state,
        loadingState : {
          ...state.loadingState,
          getIssues: true
        }
      }
    }
  
    case actions.GET_ISSUES_SUCCESS : {
      return {
        ...state,
        issues : action.issues,
        loadingState : {
          ...state.loadingState,
          getIssues: false
        }
      }
    }
  
    case actions.GET_ISSUES_FAILURE : {
      return {
        ...state,
        loadingState : {
          ...state.loadingState,
          getIssues: false
        }
      }
    }
    
    default :
      return state;
  }
};

export default projectViewReducer;
