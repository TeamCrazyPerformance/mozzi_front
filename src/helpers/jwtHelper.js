export const setJwt = (jwtToken) => {
  localStorage.setItem('jwt', jwtToken);
}

export const clearJwt = () => {
  localStorage.removeItem('jwt');
}

export const getJwt = () => {
  try {
    const jwt = localStorage.getItem('jwt');
    return jwt;
  } catch (err) {
    clearJwt();
  }
}

export const checkExpirity = (token) => {
  // if (!token) {
  //   return {
  //     error: 'not matched'
  //   };
  // }

  // try {
  //   const profile = jwtDecode(token);
  //   const expiredAt = profile.expiredAt || profile.exp * 1000;

  //   if (expiredAt > new Date().getTime())
  //     return {
  //       ...profile,
  //       token,
  //       expiredAt: new Date(expiredAt)
  //     };
  //   else {
  //     return { error: 'Token expired' };
  //   }
  // } catch (error) {
  //   return { error: 'Server Error' };
  // }

  return({
    jwtToken: true
  });
};