// import jwtDecode from 'jwt-decode';
// import fetchHelper from './../../helpers/fetchHelper';

export const postSignIn = ({ userInformation }) =>
  // return fetchHelper.post('/auth/login', userInformation)
  //         .then(response => checkExpirity(response.token));

  // //HEADER
  // {
  //   "alg": "HS256",
  //   "typ": "JWT"
  // }
  // //PAYLOAD
  // {
  //   "iss": "TCPMASTER",
  //   "name": "KangJi",
  //   "exp": 1716239022,
  //   "https://seoultech.tcp.com": true,
  //   "tcptcp": "mozzi"
  // }
  // //VERIFY SIGNATURE
  // HMACSHA256(
  //   base64UrlEncode(header) + "." +
  //   base64UrlEncode(payload),
  //   tcpMozzi
  // )

  ({
    success: true,
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJUQ1BNQVNURVIiLCJuYW1lIjoiS2FuZ0ppIiwiZXhwIjoxNzE2MjM5MDIyLCJodHRwczovL3Nlb3VsdGVjaC50Y3AuY29tIjp0cnVlLCJ0Y3B0Y3AiOiJtb3p6aSJ9.GA3AoXXAlJqbwLRRgLxexHiK5shmzjYpB12qp0oZmKA"
  });
