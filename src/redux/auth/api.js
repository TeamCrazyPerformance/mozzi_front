import fetchHelper from "../../helpers/fetchHelper";
import { checkExpirity } from "../../helpers/jwtHelper";

export const postSignIn = ({ userInformation }) => {
  return fetchHelper
    .post("/auth/login", userInformation)
    .then(response => checkExpirity(response.token));
};

export const tokenRefresh = () => {
  fetchHelper
    .post("/user/refresh")
    .then(response => checkExpirity(response.token));
};
