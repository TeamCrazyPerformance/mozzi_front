import * as joinRequestsActions from './actionTypes';

const joinRequestInitialState = {
  joinRequests: [],
  page: 0,
  count: 0,
  total: 0,
  error: false,
  loadingState: {
    joinRequests: false,
    joinRequestApprove: false,
    joinRequestReject: false
  }
};

const joinRequestsReducer = (state = joinRequestInitialState, action) => {
  switch(action.type) {
    case joinRequestsActions.GET_JOIN_REQUESTS_PENDING: {
      return {
        ...state,
        joinRequests: [],
        error: false,
        loadingState: {
          ...state.loadingState,
          joinRequests: true
        }
      };
    }
    case joinRequestsActions.GET_JOIN_REQUESTS_SUCCESS: {
      return {
        ...state,
        joinRequests: action.joinRequests,
        page: action.page,
        count: action.count,
        total: action.total,
        error: false,
        loadingState: {
          ...state.loadingState,
          joinRequests: false
        }
      };
    }
    case joinRequestsActions.GET_JOIN_REQUESTS_FAILURE: {
      return {
        ...state,
        joinRequests: [],
        page: 0,
        count: 0,
        total: 0,
        error: true,
        loadingState: {
          ...state.loadingState,
          joinRequests: false
        }
      };
    }
    case joinRequestsActions.POST_JOIN_REQUEST_APPROVE_PENDING: {
      return {
        ...state,
        error: false,
        loadingState: {
          ...state.loadingState,
          joinRequestApprove: true
        }
      };
    }
    case joinRequestsActions.POST_JOIN_REQUEST_APPROVE_SUCCESS: {
      return {
        ...state,
        error: false,
        loadingState: {
          ...state.loadingState,
          joinRequestApprove: false
        }
      };
    }
    case joinRequestsActions.POST_JOIN_REQUEST_APPROVE_FAILURE: {
      return {
        ...state,
        error: true,
        loadingState: {
          ...state.loadingState,
          joinRequestApprove: false
        }
      };
    }
    case joinRequestsActions.POST_JOIN_REQUEST_REJECT_PENDING: {
      return {
        ...state,
        error: false,
        loadingState: {
          ...state.loadingState,
          joinRequestReject: true
        }
      };
    }
    case joinRequestsActions.POST_JOIN_REQUEST_REJECT_SUCCESS: {
      return {
        ...state,
        error: false,
        loadingState: {
          ...state.loadingState,
          joinRequestReject: false
        }
      };
    }
    case joinRequestsActions.POST_JOIN_REQUEST_REJECT_FAILURE: {
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
};

export default joinRequestsReducer;