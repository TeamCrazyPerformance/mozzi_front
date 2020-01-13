// import fetchHelper from './../../../helpers/fetchHelper';

export const postSignUp = ({
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

export const putIdCheck = identityValue => {
  return new Promise((resolve, reject) => {
    const getResult = { useable: true };
    if (identityValue === "fuck") getResult.useable = false;
    if (getResult.useable) {
      resolve(true);
    } else {
      reject(new Error("Can't use this ID"));
    }
  });
};
