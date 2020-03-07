const base = (method, url, requestData, responseData) => {
  return new Promise((resolve, reject) => {
    if (responseData.success) resolve(responseData);
    else reject(new Error());
  });
};

const fakeFetchHelper = {};

["get", "post", "put", "delete"].forEach(method => {
  fakeFetchHelper[method] = base.bind(Object.create(null), method);
});

export default fakeFetchHelper;
