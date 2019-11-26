import jwtDecode from 'jwt-decode';

const checkExpirity = (token) => {
  if (!token) {
    return {
      error: 'not matched',
    };
  }

  try {
    const profile = jwtDecode(token);
    const expiredAt = profile.expiredAt || profile.exp * 1000;

    if (expiredAt > new Date().getTime()) {
      return {
        ...profile,
        token,
        expiredAt: new Date(expiredAt),
      };
    }

    return { error: 'Token expired' };
  } catch (error) {
    return { error: 'Server Error' };
  }
};

export default checkExpirity;
