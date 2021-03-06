import jwtDecode from "jwt-decode";
import { jwtLocalStorageVariableName } from "../setting/jwtSetting";

export const setJwt = jwtToken => {
  sessionStorage.setItem(jwtLocalStorageVariableName, jwtToken);
  return true;
};

export const clearJwt = () => {
  sessionStorage.removeItem(jwtLocalStorageVariableName);
  return true;
};

export const getJwt = () => {
  let jwt;

  try {
    jwt = sessionStorage.getItem(jwtLocalStorageVariableName);
  } catch (err) {
    clearJwt();
  }

  return jwt;
};

export const checkExpirity = token => {
  if (!token) {
    return {
      error: "Login Fail"
    };
  }

  const decodedJwt = jwtDecode(token);
  const currentTime = new Date().getTime();
  // new Date().getTime() return millisecond(1/1000 second)
  if (decodedJwt.exp > currentTime / 1000) {
    return {
      ...decodedJwt,
      token,
      success: true
    };
  }

  return { timeoutError: true };
};
