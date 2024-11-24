import { Routes } from '@angular/router';
import { StarterComponent } from './starter/starter.component';
import {UsuarioComponent} from "./usuarios/usuarios/usuario.component";

export const PagesRoutes: Routes = [
  {
    path: '',
    component: StarterComponent,
    data: {
      title: 'Starter',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Starter' },
      ],
    },
  },
  {
    path: 'usuarios',
    component: UsuarioComponent,
    data: {
      title: 'Usuarios',
      urls: [
        {title: 'Dashboard', url: '/usuarios'},
        {title: 'Usuarios'},
      ]
    }
  }
];
