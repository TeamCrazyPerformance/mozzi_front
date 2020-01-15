import fetchHelper from "../../helpers/fetchHelper";

export const postSignUp = async ({
  id,
  password,
  name,
  birthday,
  nickName,
  school,
  studentNumber,
  major,
  email,
  phoneNumber,
  apiCallStart,
  apiCallSuccess,
  apiCallFailure
}) => {
  apiCallStart();

  const postSignUpResponse = await fetchHelper
    .post(`/user`, {
      id,
      password,
      name,
      birthday,
      nickName,
      school,
      studentNumber,
      major,
      email,
      phoneNumber
    })
    .then(response => response);

  if (postSignUpResponse.success === true) {
    apiCallSuccess();
  } else {
    apiCallFailure();
  }
};

export const putIdCheck = async ({
  identityValue,
  idCanUseState,
  idCanNotUseState
}) => {
  const getResult = await fetchHelper
    .post(`/user`, { identityValue })
    .then(response => response);

  if (getResult.useable) {
    idCanUseState();
  } else {
    idCanNotUseState();
  }
};
