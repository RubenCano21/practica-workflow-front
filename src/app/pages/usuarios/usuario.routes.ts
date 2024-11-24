
import {Routes} from "@angular/router";
import {UsuarioComponent} from "./usuarios/usuario.component";
import {ClienteComponent} from "./clientes/cliente.component";

export const UsuarioRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'usuarios',
        component: UsuarioComponent,
      },
      {
        path: 'clientes',
        component: ClienteComponent,
      }
    ]
  }
]
