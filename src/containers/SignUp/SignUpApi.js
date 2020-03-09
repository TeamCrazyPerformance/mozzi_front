import fetchHelper from "../../helpers/fakeFetchHelper";

export const postSignUp = async ({
  userInformation,
  apiCallStart,
  apiCallSuccess,
  apiCallFailure
}) => {
  apiCallStart();

  const apiResponse = { success: true };

  await apiCallStart();

  await fetchHelper
    .post(`/user`, userInformation, apiResponse)
    .then(response => apiCallSuccess(response))
    .catch(() => apiCallFailure());
};

export const putIdCheck = async ({ identityValue }) => {
  const apiResponse = { success: true, useable: true };

  return fetchHelper
    .put(`/user/check`, { id: identityValue }, apiResponse)
    .then(response => response.useable);
};
