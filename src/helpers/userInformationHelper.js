export const setUserId = userId => {
  sessionStorage.setItem("userId", userId);
  return true;
};

export const clearUserId = () => {
  sessionStorage.removeItem("userId");
  return true;
};

export const getUserId = () => {
  let userId;

  try {
    userId = sessionStorage.getItem("userId");
  } catch (err) {
    clearUserId();
  }

  return userId;
};
