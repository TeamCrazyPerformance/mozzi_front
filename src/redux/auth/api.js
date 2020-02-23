import fetchHelper from "../../helpers/fetchHelper";
import { checkExpirity } from "../../helpers/jwtHelper";

export const postSignIn = ({ id, password }) => {
  return fetchHelper
    .post("/user/login", { id, password })
    .then(response => checkExpirity(response.token));
};

export const tokenRefresh = () => {
  fetchHelper
    .post("/user/refresh")
    .then(response => checkExpirity(response.token));
};
