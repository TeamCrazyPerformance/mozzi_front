import jwtDecode from "jwt-decode";
import { jwtLocalStorageVariableName } from "../setting/jwtSetting";

export const setJwt = jwtToken => {
  sessionStorage.setItem(jwtLocalStorageVariableName, jwtToken);
};

export const clearJwt = () => {
  sessionStorage.removeItem(jwtLocalStorageVariableName);
};

export const getJwt = () => {
  try {
    const jwt = sessionStorage.getItem(jwtLocalStorageVariableName);
    return jwt;
  } catch (err) {
    clearJwt();
  }
};

export const checkExpirity = token => {
  if (!token) {
    return {
      error: "not matched"
    };
  }

  try {
    const decodedJwt = jwtDecode(token);
    const exp = decodedJwt.exp * 1000;

    if (exp > new Date().getTime()) {
      return {
        ...decodedJwt,
        token,
        exp: new Date(exp)
      };
    }

    return { error: "Token expired" };
  } catch (error) {
    return { error: "Server Error" };
  }
};
