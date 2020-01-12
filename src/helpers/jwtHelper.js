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
      error: "not matched"
    };
  }

  try {
    const decodedJwt = jwtDecode(token);
    const { expiredAt } = decodedJwt;

    if (expiredAt > new Date().getTime()) {
      return {
        ...decodedJwt,
        token,
        exp: new Date(expiredAt)
      };
    }

    return { timeoutError: true };
  } catch (error) {
    return { error: "Server Error" };
  }
};
