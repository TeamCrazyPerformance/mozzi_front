// import fetchHelper from './../../../helpers/fetchHelper';

// export const getUsers = async ({
export const getUsers = ({
  page = 1,
  limit = 10,
  sort = 'asc',
  apiCallStart,
  apiCallSuccess,
  apiCallFailure,
  setResponseToState,
}) => {
  console.log('GET: Users call.');
  apiCallStart();

  // const getJoinRequetsResponse = await fetchHelper.get(`/admin/user/getall?limit=${limit}&page=${page}`)
  // .then(response => response)
  // .catch(error => ({error: JSON.stringify(error)}))

  const getUsersResponse = {
    success: true,
    users: [
      {
        id: 'a', name: 'Akang', password: 'A1234', nickname: 'Azzz', stdNumber: '16101340', phoneNum: '010010010', email: 'abc@naver.com', birthday: '19971226',
      },
      {
        id: 'b', name: 'Bkang', password: 'B1234', nickname: 'Bzzz', stdNumber: '26101340', phoneNum: '010010010', email: 'bbc@naver.com', birthday: '29971226',
      },
      {
        id: 'c', name: 'Ckang', password: 'C1234', nickname: 'Czzz', stdNumber: '36101340', phoneNum: '010010010', email: 'cbc@naver.com', birthday: '39971226',
      },
      {
        id: 'd', name: 'Dkang', password: 'D1234', nickname: 'Dzzz', stdNumber: '46101340', phoneNum: '010010010', email: 'dbc@naver.com', birthday: '49971226',
      },
      {
        id: 'e', name: 'Ekang', password: 'E1234', nickname: 'Ezzz', stdNumber: '56101340', phoneNum: '010010010', email: 'ebc@naver.com', birthday: '59971226',
      },
      {
        id: 'f', name: 'Fkang', password: 'F1234', nickname: 'Fzzz', stdNumber: '66101340', phoneNum: '010010010', email: 'fbc@naver.com', birthday: '69971226',
      },
      {
        id: 'g', name: 'Gkang', password: 'G1234', nickname: 'Gzzz', stdNumber: '76101340', phoneNum: '010010010', email: 'gbc@naver.com', birthday: '79971226',
      },
      {
        id: 'h', name: 'Hkang', password: 'H1234', nickname: 'Hzzz', stdNumber: '86101340', phoneNum: '010010010', email: 'hbc@naver.com', birthday: '89971226',
      },
      {
        id: 'i', name: 'Ikang', password: 'I1234', nickname: 'Izzz', stdNumber: '96101340', phoneNum: '010010010', email: 'ibc@naver.com', birthday: '99971226',
      },
      {
        id: 'j', name: 'Jkang', password: 'J1234', nickname: 'Jzzz', stdNumber: '06101340', phoneNum: '010010010', email: 'jbc@naver.com', birthday: '09971226',
      },
    ],
    page: 1,
    count: 10,
    total: 500,
  };

  if (getUsersResponse.success) {
    console.log('GET: Users success');
    setResponseToState({ getUsersResponse });
    apiCallSuccess();
  } else {
    console.log('GET: Users failure');
    apiCallFailure();
  }
};
