import * as AuthActions from './actionTypes';

const authInitialState = {
  isSignIn: false,
  loadingState: {
    signIn: false,
    signOut: false
  }
};

const authReducer = (state = authInitialState, action) => {
  switch(action.type) {
    case AuthActions.POST_SIGN_IN_PENDING: {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          signIn: true
        }
      };
    }
    case AuthActions.POST_SIGN_IN_SUCCESS: {
      return {
        ...state,
        isSignIn: true,
        loadingState: {
          ...state.loadingState,
          signIn: false
        }
      };
    }
    case AuthActions.POST_SIGN_IN_FAILURE: {
      return {
        ...state,
        isSignIn: false,
        loadingState: {
          ...state.loadingState,
          signIn: false
        }
      };
    }
    case AuthActions.SIGN_OUT_PENDING: {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          signOut: true
        }
      };
    }
    case AuthActions.SIGN_OUT_SUCCESS: {
      return {
        ...state,
        isSignIn: false,
        loadingState: {
          ...state.loadingState,
          signOut: false
        }
      };
    }
    case AuthActions.SIGN_OUT_FAILURE: {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          signOut: false
        }
      };
    }
    default:
      return state;
  }
}

export default authReducer;