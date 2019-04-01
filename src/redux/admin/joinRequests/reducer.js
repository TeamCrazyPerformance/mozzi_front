import * as actions from './actionTypes';

const joinRequestInitialState = {
  joinRequestList: [],
  page: 0,
  count: 0,
  total: 0,
  error: false,
  loadingState: {
    joinRequestList: false,
    joinRequestApprove: false,
    joinRequestReject: false
  }
};

const joinRequestReducer = (state = joinRequestInitialState, action) => {
  switch(action.type) {
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
        joinRequestList: action.joinRequestList,
        page: action.page,
        count: action.count,
        total: action.total,
        error: false,
        loadingState: {
          ...state.loadingState,
          joinRequestList: false
        }
      };
    }
    case actions.GET_JOIN_REQUEST_LIST_FAILURE: {
      return {
        ...state,
        joinRequestList: [],
        page: 0,
        count: 0,
        total: 0,
        error: true,
        loadingState: {
          ...state.loadingState,
          joinRequestList: false
        }
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
        error: false,
        loadingState: {
          ...state.loadingState,
          joinRequestApprove: false
        }
      };
    }
    case actions.POST_JOIN_REQUEST_APPROVE_FAILURE: {
      return {
        ...state,
        error: true,
        loadingState: {
          ...state.loadingState,
          joinRequestApprove: false
        }
      };
    }
    case actions.POST_JOIN_REQUEST_REJECT_PENDING: {
      return {
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
        error: false,
        loadingState: {
          ...state.loadingState,
          joinRequestReject: false
        }
      };
    }
    case actions.POST_JOIN_REQUEST_REJECT_FAILURE: {
      return {
        ...state,
        error: true,
        loadingState: {
          ...state.loadingState,
          joinRequestReject: false
        }
      };
    }
    default:
      return state;
  }
}

export default joinRequestReducer;