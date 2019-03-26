import * as actions from "../projectManipultation/actionTypes";

const projectManipulationInitialState = {
  projectId : '',
  loadingState : {
    postProject : false,
    modifyProject : false,
    deleteProject : false
  }
};


const projectManipulationReducer = (state=projectManipulationInitialState, action) => {
  switch (action.type) {
    case actions.POST_PROJECT_PENDING : {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          postProject: true
        }
      }
    }
    
    case actions.POST_PROJECT_SUCCESS : {
      return {
        ...state,
        project : action.project,
        loadingState: {
          ...state.loadingState,
          postProject: false
        }
      }
    }
    
    case actions.POST_PROJECT_FAILURE : {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          postProject: false
        }
      }
    }
    
    case actions.MODIFY_PROJECT_PENDING : {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          modifyProject: true
        }
      }
    }
  
    case actions.MODIFY_PROJECT_SUCCESS : {
      return {
        ...state,
        project : action.project,
        loadingState: {
          ...state.loadingState,
          modifyProject: false
        }
      }
    }
  
    case actions.MODIFY_PROJECT_FAILURE : {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          modifyProject: false
        }
      }
    }
  
    case actions.DELETE_PROJECT_PENDING : {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          deleteProject: true
        }
      }
    }
  
    case actions.DELETE_PROJECT_SUCCESS : {
      return {
        ...state,
        project : action.project,
        loadingState: {
          ...state.loadingState,
          deleteProject: false
        }
      }
    }
  
    case actions.DELETE_PROJECT_FAILURE : {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          deleteProject: false
        }
      }
    }
    
    
    default :
      return state;
  }
};

export default projectManipulationReducer
