import fetchHelper from "../../helpers/fetchHelper";
import checkExpirity from "../../helpers/checkExpirity";

export const getProject= (projectId) => {
  return fetchHelper.get('/project/'+projectId).then(response=>checkExpirity(response.token))
};

export const getIssues = (projectId)=>{
  return fetchHelper.get('/project/'+projectId+'/issue').then(response=>checkExpirity(response.token))
};