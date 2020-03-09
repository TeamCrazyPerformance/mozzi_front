import fetchHelper from "../../../helpers/fakeFetchHelper";

export const getUser = async ({
  userId,
  apiCallStart,
  apiCallSuccess,
  apiCallFailure
}) => {
  const apiResponse = {
    success: true,
    role: "admin",
    id: userId,
    name: "Kang Ji Hoon",
    nickName: "KangJi",
    major: "Computer science and engineering",
    stdNumber: "16101340",
    phoneNum: "01001010101",
    email: "kangkang@gmail.com",
    birthday: "19971221",
    createAt: "20200202",
    allow: "allow"
  };

  await apiCallStart();

  await fetchHelper
    .get(`/user/${userId}`, null, apiResponse)
    .then(response => apiCallSuccess(response))
    .catch(() => apiCallFailure());
};

export const putUser = async ({
  userId,
  userInformation,
  apiCallStart,
  apiCallSuccess,
  apiCallFailure
}) => {
  const apiResponse = { success: true };

  await apiCallStart();

  await fetchHelper
    .put(`/user/${userId}`, userInformation, apiResponse)
    .then(() => apiCallSuccess())
    .catch(() => apiCallFailure());
};

export const putUserPassword = async ({
  userId,
  curPassword,
  newPassword,
  apiCallStart,
  apiCallSuccess,
  apiCallFailure
}) => {
  const apiResponse = { success: true };

  await apiCallStart();

  await fetchHelper
    .put(`/user/${userId}/password`, { curPassword, newPassword }, apiResponse)
    .then(() => apiCallSuccess())
    .catch(() => apiCallFailure());
};
