import jwtDecode from 'jwt-decode';
import fetchHelper from './../../helpers/fetchHelper';

export const postSignIn = ({ userInformation }) => {
  // return fetchHelper.post('/auth/login', userInformation)
  //         .then(response => checkExpirity(response.token));
  return({ 
    success: true,
    jwt: 'string'
  });
};

// I don't know about this section.
// Wait plz.
const checkExpirity = (token) => {
  if (!token) {
    return {
      error: 'not matched'
    };
  }

  try {
    const profile = jwtDecode(token);
    const expiredAt = profile.expiredAt || profile.exp * 1000;

    if (expiredAt > new Date().getTime())
      return {
        ...profile,
        token,
        expiredAt: new Date(expiredAt)
      };
    else {
      return { error: 'Token expired' };
    }
  } catch (error) {
    return { error: 'Server Error' };
  }
};