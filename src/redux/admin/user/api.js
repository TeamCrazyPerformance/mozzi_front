// import fetchHelper from './../../../helpers/fetchHelper';

export const getUser = async ({ userId }) => {
  return ({
    success : true,
    user: {
      id: 'kangkangjiji',
      name: 'KangJiHoon',
      password: 'qwerty123',
      nickname: 'KangJi',
      stdNumber: '16101340',
      phoneNum: '01083838453',
      email: 'kangkang@naver.com',
      birthday: '1997/12/26'
    }
  });
};