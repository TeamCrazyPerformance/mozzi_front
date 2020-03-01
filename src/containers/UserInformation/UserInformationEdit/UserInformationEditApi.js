// import fetchHelper from './../../../helpers/fetchHelper';

export const getUserInformation = async ({
  userId,
  apiCallStart,
  apiCallSuccess,
  apiCallFailure
}) => {
  apiCallStart();

  const getUserInformationResponse = {
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
    allow: "dummy"
  };

  if (getUserInformationResponse.success === true) {
    delete getUserInformationResponse.success;
    apiCallSuccess(getUserInformationResponse);
  } else {
    apiCallFailure();
  }
};

export const putUser = async ({
  nickName,
  email,
  phoneNum,
  allow,
  apiCallStart,
  apiCallSuccess,
  apiCallFailure
}) => {
  apiCallStart();

  const putUserResponse = {
    success: true
  };

  if (putUserResponse.success === true) {
    delete putUserResponse.success;
    apiCallSuccess();
  } else {
    apiCallFailure();
  }
};

export const putUserPassword = async ({
  curPassword,
  newPassword,
  apiCallStart,
  apiCallSuccess,
  apiCallFailure
}) => {
  apiCallStart();

  const putUserPasswordResponse = {
    success: true
  };

  if (putUserPasswordResponse.success === true) {
    delete putUserPasswordResponse.success;
    apiCallSuccess();
  } else {
    apiCallFailure();
  }
};
