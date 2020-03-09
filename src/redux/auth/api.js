import fetchHelper from "../../helpers/fetchHelper";
import { checkExpirity } from "../../helpers/jwtHelper";

// export const postSignIn = ({ id, password }) => {
//   return fetchHelper
//     .post("/user/login", { id, password })
//     .then(response => checkExpirity(response.token));
// };

export const postSignIn = ({ id, password }) => {
  return new Promise((resolve, reject) => {
    resolve(
      checkExpirity(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiS2FuZyIsImV4cCI6MTYxODIzOTAyMiwicm9sZSI6ImFkbWluIiwidGVzdCI6IlRoaXNJc1Rlc3RKV1QifQ.dBsquE-q44jczagTHd8VxqpR7vZ3vFX3kougr1gOY2g"
      )
    );
  });
};

export const tokenRefresh = () => {
  fetchHelper
    .post("/user/refresh")
    .then(response => checkExpirity(response.token));
};
