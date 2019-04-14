import * as userActions from './actionTypes';

export const getUser = ({ userId }) => {
  return {
    type: userActions.GET_USER,
    userId: userId
  }
}