import * as usersActions from './actionTypes';

export const getUsers = ({page = 1, limit = 10}) => {
  return ({
    type: usersActions.GET_USERS,
    page: page,
    limit: limit
  });
};