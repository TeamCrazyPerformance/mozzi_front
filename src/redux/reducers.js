import Auth from './auth/reducer';
import AdminJoinRequests from './admin/joinRequests/reducer';
import AdminUsers from './admin/users/reducer';

// Combine all reducers.
export default {
  Auth,
  AdminJoinRequests,
  AdminUsers,
};