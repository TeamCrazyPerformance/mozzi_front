// import fetchHelper from './../../../helpers/fetchHelper';

// export const getProject = async ({
export const getProject = ({
  projectId,
  apiCallStart,
  apiCallSuccess,
  apiCallFailure,
  setResponseToState
}) => {
  apiCallStart();

  // const getJoinRequetsResponse = await fetchHelper.get(`/admin/user/${userId}`)
  // .then(response => response)
  // .catch(error => ({error: JSON.stringify(error)}))

  const getProjectResponse = {
    success: true,
    project: {
      title: "Mozzi project",
      member: "lee, kang, song",
      content: "This project is mozzi"
    }
  };

  if (getProjectResponse.success) {
    setResponseToState({ ...getProjectResponse.project });
    apiCallSuccess();
  } else {
    apiCallFailure();
  }
};

// export const getProject = async ({
export const postProject = ({
  projectInformation,
  apiCallStart,
  apiCallSuccess,
  apiCallFailure
}) => {
  apiCallStart();

  // const getJoinRequetsResponse = await fetchHelper.get(`/admin/user/${userId}`)
  // .then(response => response)
  // .catch(error => ({error: JSON.stringify(error)}))

  const getProjectResponse = {
    success: true
  };

  if (getProjectResponse.success) {
    apiCallSuccess();
  } else {
    apiCallFailure();
  }
};
