import fetchHelper from "../../../helpers/fakeFetchHelper";

const getUser = async ({
  userId,
  apiCallStart,
  apiCallSuccess,
  apiCallFailure
}) => {
  const apiResponse = {
    success: true,
    user: {
      role: "admin",
      id: userId,
      name: "강민준",
      nickname: "Alianna",
      major: "컴퓨터공학과",
      stdNumber: "16101340",
      phoneNum: "01020581720",
      email: "kangji1610@naver.com",
      birthday: "971226",
      createAt: "200202",
      allow: []
    }
  };

  await apiCallStart();

  await fetchHelper
    .get(`/user/${userId}`, null, apiResponse)
    .then(response => apiCallSuccess(response))
    .catch(() => apiCallFailure());
};

export default getUser;
