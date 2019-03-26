import Auth from './auth/reducer';
import ProjectMain from './projectMain/reducer';
import ProjectView from './projectView/reducer';
import ProjectManipulation from './projectManipultation/reducer';

// Combine all reducers.
export default {
  Auth, ProjectMain, ProjectView, ProjectManipulation
};