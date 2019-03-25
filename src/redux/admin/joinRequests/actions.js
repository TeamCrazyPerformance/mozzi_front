import * as actions from './actionTypes';

export const getJoinRequestList = ({ limit = 10, page = 1, sort = 'asc' }) => {
  return {
    type: actions.GET_JOIN_REQUEST_LIST,
    limit: limit,
    page: page,
    sort: sort
  };
};

export const postJoinRequestApprove = ({ userId }) => {
  return {
    type: actions.POST_JOIN_REQUEST_APPROVE,
    userId: userId
  };
};

export const postJoinRequestReject = ({ userId }) => {
  return {
    type: actions.POST_JOIN_REQUEST_REJECT,
    userId: userId
  };
};