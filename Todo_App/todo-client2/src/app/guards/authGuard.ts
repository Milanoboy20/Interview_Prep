import { inject } from "@angular/core";
import { CanActivate, CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth-service";


export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if(authService.isLoggedInStatus()) {
        return true;
    } else {
        return router.navigate(['/login']);
    }
}