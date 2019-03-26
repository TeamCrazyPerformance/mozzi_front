import fetchHelper from "../../helpers/fetchHelper";
import checkExpirity from "../../helpers/checkExpirity";

export const postProject  = (newProject) => {
  // request posting(create) projectMain
  return fetchHelper.post('/projectMain', newProject)
    .then(response=>checkExpirity(response.token))
};

export const modifyProject = (targetProject) => {
  // request modify a projectMain(targetProject)
  return fetchHelper.post('/projectMain/'+targetProject.projectId, targetProject)
    .then(response=>checkExpirity(response.token))
};

export const deleteProject = (projectId) =>{
  // request delete projectMain have this projectMain id
  return fetchHelper.delete('/projectMain'+projectId.toString(),projectId)
    .then(response => checkExpirity(response.token))
};