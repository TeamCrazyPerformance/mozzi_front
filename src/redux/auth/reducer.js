import * as actions from './actionTypes';

// Initial state of auth store.
const authInitialState = {
  isSignIn: false,
  loadingState: {
    signIn: false
  }
};

// Auth reducer.
const authReducer = (state = authInitialState, action) => {
  switch(action) {
    case actions.POST_SIGN_IN_PENDING: {
      // Start signIn request.
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          signIn: true
        }
      };
    }
    case actions.POST_SIGN_IN_SUCCESS: {
      // SignIn success. 
      return {
        ...state,
        isSignIn: true,
        loadingState: {
          ...state.loadingState,
          signIn: false
        }
      };
    }
    case actions.POST_SIGN_IN_FAILURE: {
      // SignIn failure.
      return {
        ...state,
        isSignIn: false,
        loadingState: {
          ...state.loadingState,
          signIn: false
        }
      };
    }
    case actions.SIGN_OUT_PENDING: {
      // Start signOut request.
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          signOut: true
        }
      };
    }
    case actions.SIGN_OUT_SUCCESS: {
      // SignOut success.
      return {
        ...state,
        isSignIn: false,
        loadingState: {
          ...state.loadingState,
          signOut: false
        }
      };
    }
    case actions.SIGN_OUT_FAILURE: {
      // SignOut failure.
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