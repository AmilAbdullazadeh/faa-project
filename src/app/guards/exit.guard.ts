import {LoginComponent} from "../components/login/login.component";

export const exitGuard = (component: LoginComponent) => {

  if (!component.saved) {
    return confirm('You have unsaved changes. Do you really want to exit?');
  }

  return true;

};
