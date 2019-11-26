// import fetchHelper from './../../../helpers/fetchHelper';

// export const getUser = async ({
export const getUser = ({
  userId,
  apiCallStart,
  apiCallSuccess,
  apiCallFailure,
  setResponseToState,
}) => {
  console.log('GET: User call.');
  apiCallStart();

  // const getJoinRequetsResponse = await fetchHelper.get(`/admin/user/${userId}`)
  // .then(response => response)
  // .catch(error => ({error: JSON.stringify(error)}))

  const getUserResponse = {
    success: true,
    user: {
      id: 'kangkangjiji',
      name: 'KangJiHoon',
      password: 'qwerty123',
      nickname: 'KangJi',
      stdNumber: '16101340',
      phoneNum: '01083838453',
      email: 'kangkang@naver.com',
      birthday: '1997/12/26',
    },
  };

  if (getUserResponse.success) {
    console.log('GET: User success');
    setResponseToState({ getUserResponse });
    apiCallSuccess();
  } else {
    console.log('GET: User failure');
    apiCallFailure();
  }
};
