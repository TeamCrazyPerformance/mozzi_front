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
    nickname: "KangJi",
    major: "Computer science and technology",
    studentNumber: "16101340",
    phoneNumber: "010-0101-0101",
    email: "kingking@gmail.com",
    birthday: "19971221",
    createAt: "20200202",
    allow: []
  };
  if (getUserInformationResponse.success === true) {
    delete getUserInformationResponse.success;
    apiCallSuccess(getUserInformationResponse);
  } else {
    apiCallFailure();
  }
};
