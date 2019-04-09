// import fetchHelper from './../../../helpers/fetchHelper';

export const getJoinRequests = async ({ limit, page, sort}) => {
  // return await fetchHelper.get(`/admin/user?limit=${limit}&page=${page}&sort=${sort}`)
  //         .then(response => response)
  //         .catch(error => ({error: JSON.stringify(error)}))
  return ({
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
  });
}

export const postJoinRequestApprove = async ({ userId }) => {
  // return await fetchHelper.post(`/admin/user/approve/${userId}/`)
  //         .then(response => response)
  //         .catch(error => ({error: JSON.stringify(error)}))
  return ({
    success : true
  });
}

export const postJoinRequestReject = async ({ userId }) => {
  // return await fetchHelper.post(`/admin/user/reject/${userId}/`)
  //          .then(response => response)
  //          .catch(error => ({error: JSON.stringify(error)}))
  return ({
    success : true
  });
}