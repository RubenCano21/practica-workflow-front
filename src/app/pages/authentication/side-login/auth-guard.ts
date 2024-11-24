import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard = () => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (token) {
    return true; // Permite el acceso
  } else {
    router.navigate(['/authentication/login']); // Redirige al login si no hay token
    return false; // Niega el acceso
  }
};

