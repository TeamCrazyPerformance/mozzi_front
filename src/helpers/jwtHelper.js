export const setJwt = (jwtToken) => {
  // Save jwt to browser local storage.
  localStorage.setItem('jwt', jwtToken);
}

export const clearJwt = () => {
  // Remove jwt from browser local storage.
  localStorage.removeItem('jwt');
}

export const getJwt = () => {
  try {
    // Return jwt.
    const jwt = localStorage.getItem('jwt');
    return jwt;
  } catch (err) {
    // When catch error, remove jwt.
    clearJwt();
  }
}