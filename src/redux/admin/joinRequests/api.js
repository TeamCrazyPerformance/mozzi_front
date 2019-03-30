import fetchHelper from './../../../helpers/fetchHelper';

export const getJoinRequestList = async ({ limit, page, sort}) => {
  return await fetchHelper.get(`/admin/joinrequest?limit=${limit}&page=${page}&sort=${sort}`)
          .then(response => response)
          .catch(error => ({error: JSON.stringify(error)}))
}

export const postJoinRequestApprove = async ({ userId }) => {
  return await fetchHelper.post(`/approve/${userId}/`)
          .then(response => response)
          .catch(error => ({error: JSON.stringify(error)}))
}

export const postJoinRequestReject = async ({ userId }) => {
 return await fetchHelper.post(`/reject/${userId}/`)
          .then(response => response)
          .catch(error => ({error: JSON.stringify(error)}))
}