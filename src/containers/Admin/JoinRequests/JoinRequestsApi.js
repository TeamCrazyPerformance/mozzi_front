// import fetchHelper from './../../../helpers/fetchHelper';

// export const getJoinRequests = async ({
export const getJoinRequests = ({
  limit = 10,
  page = 1,
  sort = 'asc',
  apiCallStart,
  apiCallSuccess,
  apiCallFailure,
  setResponseToState,
  }) => {
  console.log('GET: Join requests call.');
  apiCallStart();

  // const getJoinRequetsResponse = await fetchHelper.get(`/admin/user?limit=${limit}&page=${page}&sort=${sort}`)
  // .then(response => response)
  // .catch(error => ({error: JSON.stringify(error)}))

  const getJoinRequestsResponse = {
    success: true,
    users: [
      {name: 'Kang', stdNumber: '16101340', userId: '001'},
      {name: 'Ji', stdNumber: '16101340', userId: '002'},
      {name: 'Hoon', stdNumber: '16101340', userId: '003'},
      {name: 'zzang', stdNumber: '16101340', userId: '004'},
      {name: 'Lee', stdNumber: '16101340', userId: '005'},
      {name: 'Song', stdNumber: '16101340', userId: '006'},
      {name: 'Yeol', stdNumber: '16101340', userId: '007'},
      {name: 'zzangzzang', stdNumber: '16101340', userId: '008'},
      {name: 'man', stdNumber: '16101340', userId: '009'},
      {name: 'gkgkgkgk', stdNumber: '16101340', userId: '010'},
    ],
    page: 1,
    count: 10,
    total: 500
  };

  if(getJoinRequestsResponse.success) {
    console.log('GET: Join requests success');
    setResponseToState({ getJoinRequestsResponse: getJoinRequestsResponse });
    apiCallSuccess();
  } else {
    console.log('GET: Join requests failure');
    apiCallFailure();
  }
}
  
// export const postJoinRequestApprove = async ({ userId }) => {
export const postJoinRequestApprove = ({ userId }) => {
  // return await fetchHelper.post(`/admin/user/approve/${userId}/`)
  //         .then(response => response)
  //         .catch(error => ({error: JSON.stringify(error)}))
  console.log(`POST: ${userId} Join request approve.`);
  return ({
    success : true
  });
}
  
// export const postJoinRequestReject = async ({ userId }) => {
export const postJoinRequestReject = ({ userId }) => {
  // return await fetchHelper.post(`/admin/user/reject/${userId}/`)
  //          .then(response => response)
  //          .catch(error => ({error: JSON.stringify(error)}))
  console.log(`POST: ${userId} Join request reject.`);
  return ({
    success : true
  });
}