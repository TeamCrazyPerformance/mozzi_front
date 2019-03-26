import fetchHelper from './../../helpers/fetchHelper';
import checkExpirity from './../../helpers/checkExpirity';


export const getProjects = () =>{
  // request projectMain list
  return fetchHelper.get('/projectMain').then(response=>checkExpirity(response.token))
};

