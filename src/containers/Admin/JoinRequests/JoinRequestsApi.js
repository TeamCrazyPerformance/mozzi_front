import fetchHelper from "../../../helpers/fakeFetchHelper";

export const getJoinRequests = async ({
  rowsPerPage = 10,
  page = 0,
  sort = "asc",
  apiCallStart,
  apiCallSuccess,
  apiCallFailure
}) => {
  const apiResponse = {
    success: true,
    users: [
      { name: "강민준", stdNumber: "16101341", userId: "kangji1610" },
      { name: "이서준", stdNumber: "15101261", userId: "sy1510" },
      { name: "정예준", stdNumber: "18101826", userId: "dongha1810" },
      { name: "김도윤", stdNumber: "18101926", userId: "doh18" },
      { name: "이시우", stdNumber: "15101729", userId: "gw1741" },
      { name: "김주원", stdNumber: "16101274", userId: "kimkim715" },
      { name: "전하준", stdNumber: "16101037", userId: "jjj391" },
      { name: "윤지호", stdNumber: "12101348", userId: "yjs1013" },
      { name: "임현우", stdNumber: "14101242", userId: "ijh34879" }
    ],
    page,
    count: rowsPerPage,
    total: 9
  };

  await apiCallStart();

  await fetchHelper
    .get(
      `/admin/user?limit=${rowsPerPage}&page=${page}&sort=${sort}`,
      null,
      apiResponse
    )
    .then(response => apiCallSuccess(response))
    .catch(() => apiCallFailure());
};

export const postJoinRequestReview = async ({
  userId,
  joinRequestType,
  currentPage = 1,
  apiCallStart,
  apiCallSuccess,
  apiCallFailure
}) => {
  const apiResponse = { success: true };

  await apiCallStart();

  if (joinRequestType === "approve" || joinRequestType === "reject") {
    await fetchHelper
      .put(`/admin/user/${joinRequestType}/${userId}/`, { userId }, apiResponse)
      .then(() => apiCallSuccess(null, currentPage))
      .catch(() => apiCallFailure());
  } else {
    console.log("POST: Join request review type error");
  }
};
