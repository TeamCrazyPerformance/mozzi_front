import { jwtLocalStorageVariableName } from "../setting/jwtSetting";

const customHeader = () => {
  if (sessionStorage.getItem(jwtLocalStorageVariableName)) {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer ".concat(
        sessionStorage.getItem(jwtLocalStorageVariableName)
      )
    };
  }
  return {
    "Content-Type": "application/json",
    Accept: "application/json"
  };
};

// Make http request with fetch api.
const base = (method, url, data) =>
  fetch(url, {
    method,
    headers: customHeader(),
    body: JSON.stringify(data)
  })
    .then(response => {
      console.log(response);
      if (response.ok) return response.json();
      return { error: "Error" };
    })
    .catch(() => ({ error: "Server Error" }));

const fetchHelper = {};

["get", "post", "put", "delete"].forEach(method => {
  fetchHelper[method] = base.bind(Object.create(null), method);
});

export default fetchHelper;
