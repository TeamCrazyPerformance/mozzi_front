import * as JoinRequestsActions from './actionTypes';

export const getJoinRequests = ({ limit = 10, page = 1, sort = 'asc' }) => {
  return {
    type: JoinRequestsActions.GET_JOIN_REQUESTS,
    limit: limit,
    page: page,
    sort: sort
  };
};

export const postJoinRequestApprove = ({ userId, limit = 10, page = 1, sort = 'asc' }) => {
  return {
    type: JoinRequestsActions.POST_JOIN_REQUEST_APPROVE,
    userId: userId,
    limit: limit,
    page: page,
    sort: sort
  };
};

export const postJoinRequestReject = ({ userId, limit = 10, page = 1, sort = 'asc'  }) => {
  return {
    type: JoinRequestsActions.POST_JOIN_REQUEST_REJECT,
    userId: userId,
    limit: limit,
    page: page,
    sort: sort
  };
};