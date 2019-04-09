// import jwtDecode from 'jwt-decode';
// import fetchHelper from './../../helpers/fetchHelper';

export const postSignIn = ({ userInformation }) => {
  // return fetchHelper.post('/auth/login', userInformation)
  //         .then(response => checkExpirity(response.token));

  return({ 
    success: true,
    jwt: 'string'
  });
};