import fetchHelper from '../../helpers/fetchHelper';
import checkExpirity from '../../helpers/checkExpirity';

export const getProjects = ({ page, limit }) => fetchHelper.get(`/projectMain?page=${page}&limit=${limit}`).then(response => checkExpirity(response.token));

export const postProject = newProject => fetchHelper.post('/projectMain', newProject)
  .then(response => checkExpirity(response.token));

export const modifyProject = ({ projectId, replaceProject }) => fetchHelper.put(`/projectMain/${projectId}`, replaceProject)
  .then(response => checkExpirity(response.token));

export const deleteProject = projectId => fetchHelper.delete(`/projectMain${projectId.toString()}`, projectId)
  .then(response => checkExpirity(response.token));

export const getProject = projectId => fetchHelper.get(`/project/${projectId}`).then(response => checkExpirity(response.token));

export const getIssues = projectId => fetchHelper.get(`/project/${projectId}/issue`).then(response => checkExpirity(response.token));
