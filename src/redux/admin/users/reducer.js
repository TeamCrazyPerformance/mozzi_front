import * as usersActions from './actionTypes';

const usersInitialState = {
  users: [],
  page: 0,
  count: 0,
  total: 0,
  error: false,
  loadingState: {
    users: false
  }
};

const usersReducer = (state = usersInitialState, action) => {
  switch(action.type) {
    case usersActions.GET_USERS_PENDING: {
      return {
        ...state,
        users: [],
        error: false,
        loadingState: {
          ...state.loadingState,
          users: true
        }
      };
    }
    case usersActions.GET_USERS_SUCCESS: {
      return {
        ...state,
        users: action.users,
        page: action.page,
        count: action.count,
        total: action.total,
        error: false,
        loadingState: {
          ...state.loadingState,
          users: false
        }
      };
    }
    case usersActions.GET_USERS_FAILURE: {
      return {
        ...state,
        users: [],
        page: 0,
        count: 0,
        total: 0,
        error: true,
        loadingState: {
          ...state.loadingState,
          users: false
        }
      };
    }
    default:
      return state
  }
};

export default usersReducer;