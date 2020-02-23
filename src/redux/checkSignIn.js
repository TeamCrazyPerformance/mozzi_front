import store from "./store";
import * as authActions from "./auth/actions";

const checkSignIn = () => store.dispatch(authActions.checkAuthorization());

export default checkSignIn;
