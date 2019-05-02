import * as actions from './actionTypes';

const issueMainInitialState = {
  issues: [],
  loadingState: {
    getIssues: false,
  },
};

const issueMainReducer = (state = issueMainInitialState, action) => {
  switch (action.type) {
    case actions.GET_ISSUES_PENDING: {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          getIssues: true,
        },
      };
    }

    case actions.GET_ISSUES_SUCCESS: {
      return {
        ...state,
        issues: action.issues,
        loadingState: {
          ...state.loadingState,
          getIssues: false,
        },
      };
    }

    case actions.GET_ISSUES_FAILURE: {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          getIssues: false,
        },
      };
    }

    default:
      return state;
  }
};

export default issueMainReducer;
