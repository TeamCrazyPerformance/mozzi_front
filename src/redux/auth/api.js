import fetchHelper from "../../helpers/fetchHelper";
import { checkExpirity } from "../../helpers/jwtHelper";

export const postSignIn = ({ id, password }) => {
  return fetchHelper
    .post("/user/login", { id, password })
    .then(response => checkExpirity(response.token));
};
// {
//   return {
//     success: true,
//     role: "admin",
//     token:
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZXhwIjoxNjI3MjM5MDIyfQ.WSiharqFEJwXWM4F4_SFO-dwvVJHUXXCVsq7uJ0oFA4"
//   };
// };



export const tokenRefresh = () => ({
  success: true,
  role: "admin",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZXhwIjoxNjI3MjM5MDIyfQ.WSiharqFEJwXWM4F4_SFO-dwvVJHUXXCVsq7uJ0oFA4"
});

// {
//   fetchHelper
//     .post("/user/refresh")
//     .then(response => checkExpirity(response.token));
// };
