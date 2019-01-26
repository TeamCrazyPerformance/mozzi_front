import { jwtConfig } from './../setting/jwtSetting';

// Make custom header for jwt.
const customHeader = () => {
  if(localStorage.getItem('jwt')) {
    return({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer '.concat(localStorage.getItem('jwt'))
    })
  } else {
    return({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  }
};

// Make http request with fetch api.
const base = (method, url, data) => {
  return fetch(`${jwtConfig.fetchUrl + url}`, {
    method,
    headers: customHeader(),
    body: JSON.stringify(data)
  })
    .then(response => {
      return response.ok ? response.json() : { error: 'Error' }
  })
    .then(response => response)
    .catch(error => ({ error: 'Server Error'}));
};

const fetchHelper = {};

['get', 'post', 'put', 'delete'].forEach(method => {
  fetchHelper[method] = base.bind(Object.create(null), method);
});

export default fetchHelper;