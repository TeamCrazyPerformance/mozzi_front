// import fetchHelper from './../../../helpers/fetchHelper';

// export const getJoinRequests = async ({
export const getJoinRequests = ({
  limit = 10,
  page = 1,
  sort = "asc",
  apiCallStart,
  apiCallSuccess,
  apiCallFailure,
  setResponseToState
}) => {
  apiCallStart();

  // const getJoinRequetsResponse = await fetchHelper.get(`/admin/user?limit=${limit}&page=${page}&sort=${sort}`)
  // .then(response => response)
  // .catch(error => ({error: JSON.stringify(error)}))

  const getJoinRequestsResponse = {
    success: true,
    users: [
      { name: "Kang", stdNumber: "16101341", userId: "001" },
      { name: "Ji", stdNumber: "16101342", userId: "002" },
      { name: "Hoon", stdNumber: "16101343", userId: "003" },
      { name: "zzang", stdNumber: "16101344", userId: "004" },
      { name: "Lee", stdNumber: "16101345", userId: "005" },
      { name: "Song", stdNumber: "16101346", userId: "006" },
      { name: "Yeol", stdNumber: "16101347", userId: "007" },
      { name: "zzangzzang", stdNumber: "16101348", userId: "008" },
      { name: "man", stdNumber: "16101349", userId: "009" },
      { name: "gkgkgkgk", stdNumber: "16101340", userId: "010" }
    ],
    page: 1,
    count: 10,
    total: 500
  };

  if (getJoinRequestsResponse.success) {
    setResponseToState({ getJoinRequestsResponse });
    apiCallSuccess();
  } else {
    apiCallFailure();
  }
};

// export const postJoinRequestReview = async ({
export const postJoinRequestReview = ({
  userId,
  joinRequestType,
  currentPage = 1,
  apiCallStart,
  apiCallSuccess,
  apiCallFailure
}) => {
  let postJoinRequestApprove = { success: false };
  let postJoinRequestReject = { success: false };
  apiCallStart();

  if (joinRequestType === "approve") {
    postJoinRequestApprove = { success: true };
    // const postJoinRequestApprove = await fetchHelper.post(`/admin/user/approve/${userId}/`)
    // .then(response => response)
    // .catch(error => ({error: JSON.stringify(error)}))
  } else if (joinRequestType === "reject") {
    postJoinRequestReject = { success: true };
    // const postJoinRequestReject = await fetchHelper.post(`/admin/user/reject/${userId}/`)
    // .then(response => response)
    // .catch(error => ({error: JSON.stringify(error)}))
  } else {
    console.log("POST: Join request review type error");
  }

  if (postJoinRequestApprove.success) {
    apiCallSuccess(null, currentPage);
  } else if (postJoinRequestReject.success) {
    apiCallSuccess(null, currentPage);
  } else {
    apiCallFailure();
  }
};
