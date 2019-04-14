import * as AuthActions from './actionTypes';

export const postSignIn = ({ identity, password }) => {
  return {
    type: AuthActions.POST_SIGN_IN,
    identity: identity,
    password: password
  };
};

export const signOut = () => {
  return {
    type: AuthActions.SIGN_OUT
  };
};

export const checkAuthorization = () => {
  return {
    type: AuthActions.CHECK_AUTHORIZATION
  }
}