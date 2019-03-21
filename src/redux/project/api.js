import fetchHelper from './../../helpers/fetchHelper';
import jwtDecode from "jwt-decode";


export const getProjects = () =>{
  // request project list
  return fetchHelper.get('/project').then(response=>checkExpirity(response.token))
};

export const getProject= (projectId) => {
  //request a project
  return fetchHelper.get('/project/'+projectId).then(response=>checkExpirity(response.token))
};

export const postProject  = (newProject) => {
  // request posting(create) project
  return fetchHelper.post('/project', newProject)
    .then(response=>checkExpirity(response.token))
};

export const modifyProject = (targetProject) => {
  // request modify a project(targetProject)
  return fetchHelper.post('/project/'+targetProject.projectId, targetProject)
    .then(response=>checkExpirity(response.token))
};

export const deleteProject = (projectId) =>{
  // request delete project have this project id
  return fetchHelper.delete('/project'+projectId.toString(),projectId)
    .then(response => checkExpirity(response.token))
};


const checkExpirity = (token) => {
  if (!token) {
    return {
      error: 'not matched'
    };
  }
  
  try {
    const profile = jwtDecode(token);
    const expiredAt = profile.expiredAt || profile.exp * 1000;
    
    if (expiredAt > new Date().getTime())
      return {
        ...profile,
        token,
        expiredAt: new Date(expiredAt)
      };
    else {
      return { error: 'Token expired' };
    }
  } catch (error) {
    return { error: 'Server Error' };
  }
};