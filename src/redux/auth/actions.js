import * as AuthActions from './actionTypes';

export const postSignIn = ({ identity, password }) => ({
  type: AuthActions.POST_SIGN_IN,
  identity,
  password,
});

export const signOut = () => ({
  type: AuthActions.SIGN_OUT,
});

export const checkAuthorization = () => ({
  type: AuthActions.CHECK_AUTHORIZATION,
});
