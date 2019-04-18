import * as userActions from './actionTypes';

const userInitialState = {
  user: {
    id: '',
    name: '',
    password: '',
    nickname: '',
    stdNumber: '',
    phoneNum: '',
    email: '',
    birthday: ''
  },
  error: false,
  loadingState: {
    user: false
  }
};

const userReducer = (state = userInitialState, action) => {
  switch(action.type) {
    case userActions.GET_USER_PENDING: {
      return {
        ...state,
        user: {
          id: '',
          name: '',
          password: '',
          nickname: '',
          stdNumber: '',
          phoneNum: '',
          email: '',
          birthday: ''
        },
        error: false,
        loadingState: {
          ...state.loadingState,
          user: true
        }
      };
    }
    case userActions.GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        error: false,
        loadingState: {
          ...state.loadingState,
          user: false
        }
      };
    }
    case userActions.GET_USER_FAILURE: {
      return {
        ...state,
        user: {
          id: '',
          name: '',
          password: '',
          nickname: '',
          stdNumber: '',
          phoneNum: '',
          email: '',
          birthday: ''
        },
        error: true,
        loadingState: {
          ...state.loadingState,
          user: false
        }
      };
    }
    default:
      return state
  }
};

export default userReducer;