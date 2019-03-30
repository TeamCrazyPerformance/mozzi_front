import * as actions from './actionTypes';

const joinRequestInitialState = {
  joinRequestList: [
    {
      name: '',
      stdNumber: ''
    },
  ],
  page: 0,
  error: false,
  loadingState: {
    joinRequestList: false,
    joinRequestApprove: false,
    joinRequestReject: false
  }
};

const joinRequestReducer = (state = joinRequestInitialState, action) => {
  switch(action) {
    case actions.GET_JOIN_REQUEST_LIST_PENDING: {
      return {
        ...state,
        joinRequestList: [],
        error: false,
        loadingState: {
          ...state.loadingState,
          joinRequestList: true
        }
      };
    }
    case actions.GET_JOIN_REQUEST_LIST_SUCCESS: {
      return {
        ...state,
        
      };
    }
    case actions.GET_JOIN_REQUEST_LIST_FAILURE: {
      return {
        ...state,
        
      };
    }
    case actions.POST_JOIN_REQUEST_APPROVE_PENDING: {
      return {
        ...state,
        error: false,
        loadingState: {
          ...state.loadingState,
          joinRequestApprove: true
        }
      };
    }
    case actions.POST_JOIN_REQUEST_APPROVE_SUCCESS: {
      return {
        ...state,
        
      };
    }
    case actions.POST_JOIN_REQUEST_APPROVE_FAILURE: {
      return {
        ...state,
        
      };
    }
    case actions.POST_JOIN_REQUEST_REJECT_PENDING: {
      return {
        ...state,
        ...state,
        error: false,
        loadingState: {
          ...state.loadingState,
          joinRequestReject: true
        }
      };
    }
    case actions.POST_JOIN_REQUEST_REJECT_SUCCESS: {
      return {
        ...state,
        
      };
    }
    case actions.POST_JOIN_REQUEST_REJECT_FAILURE: {
      return {
        ...state,
        
      };
    }
    default:
      return state;
  }
}

export default joinRequestReducer;