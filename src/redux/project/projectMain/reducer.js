import * as actions from './actionTypes';

function Project() {
  this.projectId = 1;
  this.link = '';
  this.name = 'mozzi';
  this.author = '이건우';
  this.date = '2019-04-11';
}

var projects = [];

for(var i=0; i<100; i++){
  projects.push(new Project());
}

const projectMainInitialState = {
  projects: projects,
  page: 0,
  limit: 5,
  total: 0,
  loadingState: {
    getProjects: false,
  },
};

const projectMainReducer = (state = projectMainInitialState, action) => {
  switch (action.type) {
    case actions.GET_PROJECTS_PENDING: {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          getProjects: true,
        },
      };
    }

    case actions.GET_PROJECTS_SUCCESS: {
      return {
        ...state,
        projects: action.projects,
        page: action.page,
        limit: action.limit,
        loadingState: {
          ...state.loadingState,
          getProjects: false,
        },
      };
    }

    case actions.GET_PROJECTS_FAILURE: {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          getProjects: false,
        },
      };
    }

    default:
      return state;
  }
};

export default projectMainReducer;
