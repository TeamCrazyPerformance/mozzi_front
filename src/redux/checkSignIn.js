import { store } from "./store";
import * as authActions from "./auth/actions";

const checkSignIn = component => {
  store.dispatch(authActions.checkAuthorization());
  return component;
};

export default checkSignIn;
