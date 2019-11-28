import * as actions from "./actionTypes";

export const getProjects = (page, limit) => ({
  type: actions.GET_PROJECTS,
  page,
  limit
});
