import * as actions from './actionTypes';

export const postSignIn = ({ identity, password }) => {
  return {
    type: actions.POST_SIGN_IN,
    identity: identity,
    password: password
  };
};

export const signOut = () => {
  return {
    type: actions.SIGN_OUT
  };
};

export const checkAuthorization = () => {
  return {
    type: actions.CHECK_AUTHORIZATION
  }
}