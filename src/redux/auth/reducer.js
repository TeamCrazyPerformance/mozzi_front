import * as AuthActions from "./actionTypes";

const authInitialState = {
  isSignIn: false,
  role: "",
  userId: "",
  loadingState: false,
  idPasswordError: false
};

const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case AuthActions.POST_SIGN_IN_PENDING: {
      return {
        ...state,
        loadingState: true,
        idPasswordError: false
      };
    }
    case AuthActions.UPDATE_USER_ID: {
      return {
        ...state,
        userId: action.userId
      };
    }
    case AuthActions.POST_SIGN_IN_SUCCESS_USER: {
      return {
        ...state,
        isSignIn: true,
        role: "user",
        loadingState: false,
        idPasswordError: false
      };
    }
    case AuthActions.POST_SIGN_IN_SUCCESS_ADMIN: {
      return {
        ...state,
        isSignIn: true,
        role: "admin",
        loadingState: false,
        idPasswordError: false
      };
    }
    case AuthActions.POST_SIGN_IN_FAILURE: {
      return {
        ...state,
        isSignIn: false,
        role: "",
        userId: "",
        loadingState: false,
        idPasswordError: true
      };
    }
    case AuthActions.SIGN_OUT_SUCCESS: {
      return {
        ...state,
        isSignIn: false,
        role: "",
        userId: "",
        loadingState: false,
        idPasswordError: false
      };
    }
    case AuthActions.SIGN_OUT_FAILURE: {
      return {
        ...state,
        isSignIn: false,
        role: "",
        userId: "",
        loadingState: false,
        idPasswordError: false
      };
    }
    case AuthActions.TOKEN_AUTH_ERROR: {
      return {
        ...state,
        isSignIn: false,
        role: "",
        userId: "",
        loadingState: false,
        idPasswordError: false
      };
    }
    default:
      return state;
  }
};

export default authReducer;
