import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export const authGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  const authService = inject(AuthService)

  return authService.isLoggedIn;
};
