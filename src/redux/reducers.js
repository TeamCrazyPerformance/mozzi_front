import auth from './auth/reducer';
import adminJoinRequests from './admin/joinRequests/reducer';
import adminUsers from './admin/users/reducer';
import adminUser from './admin/user/reducer';

// Combine all reducers.
export default {
  auth,
  adminJoinRequests,
  adminUsers,
  adminUser,
};