import * as joinRequestsActions from './actionTypes';

export const getJoinRequests = ({ limit = 10, page = 1, sort = 'asc' }) => {
  return {
    type: joinRequestsActions.GET_JOIN_REQUESTS,
    limit: limit,
    page: page,
    sort: sort
  };
};

export const postJoinRequestApprove = ({ userId, limit = 10, page = 1, sort = 'asc' }) => {
  return {
    type: joinRequestsActions.POST_JOIN_REQUEST_APPROVE,
    userId: userId,
    limit: limit,
    page: page,
    sort: sort
  };
};

export const postJoinRequestReject = ({ userId, limit = 10, page = 1, sort = 'asc'  }) => {
  return {
    type: joinRequestsActions.POST_JOIN_REQUEST_REJECT,
    userId: userId,
    limit: limit,
    page: page,
    sort: sort
  };
};