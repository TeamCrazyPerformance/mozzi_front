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
        projectId: "888",
        projectName: "Mozzi",
        projectLeader: "Lee"
      }
    };
  
    if (getProjectResponse.success) {
      setResponseToState({ getProjectResponse });
      apiCallSuccess();
    } else {
      apiCallFailure();
    }
  };
  