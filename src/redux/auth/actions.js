import * as actions from './actionTypes';

// SignIn request function.
export const postSignIn = ({ identity, password }) => {
  return {
    type: actions.POST_SIGN_IN,
    identity: identity,
    password: password
  };
};

// SignOut request function.
export const signOut = () => {
  return {
    type: actions.SIGN_OUT
  };
};