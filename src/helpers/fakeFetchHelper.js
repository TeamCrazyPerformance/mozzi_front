const base = (method, url, requestData, responseData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(url, method, requestData);
      if (responseData.success) resolve(responseData);
      else reject(new Error());
    }, 500);
  });
};

const fakeFetchHelper = {};

["get", "post", "put", "delete"].forEach(method => {
  fakeFetchHelper[method] = base.bind(Object.create(null), method);
});

export default fakeFetchHelper;
