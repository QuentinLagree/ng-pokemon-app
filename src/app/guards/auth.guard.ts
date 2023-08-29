import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

export const AuthGuard = () => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router)

  if (!authService.isConnected) router.navigate(['/login']);
    return authService.isConnected;
}