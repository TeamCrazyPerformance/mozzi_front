<<<<<<< HEAD
import auth from './auth/reducer';
import ProjectMain from './project/projectMain/reducer';
import ProjectView from './project/projectView/reducer';
import ProjectManipulation from './project/projectManipulation/reducer';

// Combine all reducers.
export default {
  auth,
  ProjectMain,
  ProjectView,
  ProjectManipulation
};
=======
import Auth from './auth/reducer';
import ProjectMain from './project/projectMain/reducer';
import ProjectView from './project/projectView/reducer';
import ProjectManipulation from './project/projectManipulation/reducer';
import IssueMain from './project/issueMain/reducer';

// Combine all reducers.
export default {
  Auth, ProjectMain, ProjectView, ProjectManipulation, IssueMain,
};
>>>>>>> origin/Kwoo_dev
