// import fetchHelper from './../../../helpers/fetchHelper';

// export const getUsers = async ({
export const getProjects = ({
  page = 1,
  limit = 10,
  sort = "asc",
  apiCallStart,
  apiCallSuccess,
  apiCallFailure,
  setResponseToState
}) => {
  apiCallStart();

  // const getJoinRequetsResponse = await fetchHelper.get(`/admin/user/getall?limit=${limit}&page=${page}`)
  // .then(response => response)
  // .catch(error => ({error: JSON.stringify(error)}))

  const getProjectsResponse = {
    success: true,
    projects: [
      {
        projectId: "1",
        projectName: "project1",
        projectLeader: "kang"
      },
      {
        projectId: "2",
        projectName: "project2",
        projectLeader: "lee"
      },
      {
        projectId: "3",
        projectName: "project3",
        projectLeader: "song"
      },
      {
        projectId: "4",
        projectName: "project4",
        projectLeader: "june"
      },
    ],
    page: 1,
    count: 10,
    total: 500
  };

  if (getProjectsResponse.success) {
    setResponseToState({ getProjectsResponse });
    apiCallSuccess();
  } else {
    apiCallFailure();
  }
};
