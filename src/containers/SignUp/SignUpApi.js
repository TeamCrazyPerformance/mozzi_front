// import fetchHelper from './../../../helpers/fetchHelper';

export const postSignUp = ({
  userInformation,
  apiCallStart,
  apiCallSuccess,
  apiCallFailure
}) => {
  apiCallStart();

  // const postSignUpResponse = await fetchHelper.post(`/user`, userInformation)
  // .then(response => response)
  // .catch(error => ({error: JSON.stringify(error)}))

  const postSignUpResponse = {
    success: true
  };

  if (postSignUpResponse.success) {
    apiCallSuccess();
  } else {
    apiCallFailure();
  }
};
