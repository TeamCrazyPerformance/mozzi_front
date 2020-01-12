import * as AuthActions from "./actionTypes";

export const postSignIn = ({ id, password }) => ({
  type: AuthActions.POST_SIGN_IN,
  id,
  password
});

export const signOut = () => ({
  type: AuthActions.SIGN_OUT
});

export const checkAuthorization = () => ({
  type: AuthActions.CHECK_AUTHORIZATION
});
