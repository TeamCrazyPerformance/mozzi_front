import * as actions from "./actionTypes";

const projectManipulationInitialState = {
  project: {
    projectId: "",
    name: "",
    content: "",
    isPublic: true,
    stack: "",
    members: []
  },
  loadingState: {
    postProject: false,
    modifyProject: false,
    deleteProject: false
  }
};

const projectManipulationReducer = (
  state = projectManipulationInitialState,
  action
) => {
  switch (action.type) {
    case actions.POST_PROJECT_PENDING: {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          postProject: true
        }
      };
    }

    case actions.POST_PROJECT_SUCCESS: {
      return {
        ...state,
        project: action.project,
        loadingState: {
          ...state.loadingState,
          postProject: false
        }
      };
    }

    case actions.POST_PROJECT_FAILURE: {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          postProject: false
        }
      };
    }

    case actions.MODIFY_PROJECT_PENDING: {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          modifyProject: true
        }
      };
    }

    case actions.MODIFY_PROJECT_SUCCESS: {
      return {
        ...state,
        project: action.project,
        loadingState: {
          ...state.loadingState,
          modifyProject: false
        }
      };
    }

    case actions.MODIFY_PROJECT_FAILURE: {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          modifyProject: false
        }
      };
    }

    case actions.DELETE_PROJECT_PENDING: {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          deleteProject: true
        }
      };
    }

    case actions.DELETE_PROJECT_SUCCESS: {
      return {
        ...state,
        project: action.project,
        loadingState: {
          ...state.loadingState,
          deleteProject: false
        }
      };
    }

    case actions.DELETE_PROJECT_FAILURE: {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          deleteProject: false
        }
      };
    }

    case actions.SET_PROJECT_NAME: {
      return {
        ...state,
        project: {
          ...state.project,
          name: action.name
        }
      };
    }

    case actions.SET_PROJECT_CONTENT: {
      return {
        ...state,
        project: {
          ...state.project,
          content: action.content
        }
      };
    }

    case actions.SET_PROJECT_ISPUBLIC: {
      return {
        ...state,
        project: {
          ...state.project,
          isPublic: action.isPublic
        }
      };
    }

    case actions.SET_PROJECT_STACK: {
      return {
        ...state,
        project: {
          ...state.project,
          stack: action.stack
        }
      };
    }

    default:
      return state;
  }
};

export default projectManipulationReducer;
