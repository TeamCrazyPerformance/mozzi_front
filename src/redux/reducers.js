import auth from './auth/reducer';
import ProjectMain from './project/projectMain/reducer';
import ProjectView from './project/projectView/reducer';
import ProjectManipulation from './project/projectManipulation/reducer';
import IssueMain from './project/issueMain/reducer';

// Combine all reducers.
export default {
  auth,
  ProjectMain,
  ProjectView,
  ProjectManipulation,
  IssueMain,
};
