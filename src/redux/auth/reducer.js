import * as AuthActions from "./actionTypes";

const authInitialState = {
  isSignIn: false,
  role: "",
  loadingState: {
    signIn: false,
    signOut: false
  }
};

const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case AuthActions.POST_SIGN_IN_PENDING: {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          signIn: true
        }
      };
    }
    case AuthActions.POST_SIGN_IN_SUCCESS_USER: {
      return {
        ...state,
        isSignIn: true,
        role: "user",
        loadingState: {
          ...state.loadingState,
          signIn: false
        }
      };
    }
    case AuthActions.POST_SIGN_IN_SUCCESS_ADMIN: {
      return {
        ...state,
        isSignIn: true,
        role: "admin",
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
        role: "",
        loadingState: {
          ...state.loadingState,
          signIn: false
        }
      };
    }
    case AuthActions.SIGN_OUT_SUCCESS: {
      return {
        ...state,
        isSignIn: false,
        role: ""
      };
    }
    case AuthActions.SIGN_OUT_FAILURE: {
      return {
        ...state,
        isSignIn: false,
        role: ""
      };
    }
    default:
      return state;
  }
};

export default authReducer;
