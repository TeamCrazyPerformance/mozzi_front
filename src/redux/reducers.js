import Auth from './auth/reducer';
import AdminJoinRequest from './admin/joinRequests/reducer';
import ExamGetRequest from './Exam/ExamTable/reducer';

// Combine all reducers.
export default {
  Auth,
  AdminJoinRequest,
  ExamGetRequest,
};