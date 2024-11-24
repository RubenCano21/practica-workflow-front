import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import {authGuard} from "./pages/authentication/side-login/auth-guard";
import {AppSideLoginComponent} from "./pages/authentication/side-login/side-login.component";

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AppSideLoginComponent },
  {
    path: '',
    component: FullComponent,
     // canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.routes').then((m) => m.PagesRoutes),
        // canActivate: [authGuard],
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.routes').then(
            (m) => m.UiComponentsRoutes
          ),
        // canActivate: [authGuard],
      },
      {
        path: 'usuarios',
        loadChildren: () =>
          import('./pages/usuarios/usuario.routes').then(
            (m) => m.UsuarioRoutes
          ),
        // canActivate: [authGuard],
      },
      {
        path: 'tramites',
        loadChildren: () =>
          import('./pages/tramites/tramite.routes').then(
            (m) => m.TramiteRoutes
          ),
        // canActivate: [authGuard],
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.routes').then((m) => m.ExtraRoutes),
        // canActivate: [authGuard],
      },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.routes').then(
            (m) => m.AuthenticationRoutes
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];
