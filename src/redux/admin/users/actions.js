import * as actions from './actionTypes';

export const getUsers = ({page = 1, limit = 10}) => {
  return ({
    type: actions.GET_USERS,
    page: page,
    limit: limit
  });
};