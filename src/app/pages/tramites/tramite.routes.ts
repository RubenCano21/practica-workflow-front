import {Routes} from "@angular/router";
import {TramiteComponent} from "./lista/tramite.component";
import {RegistrarComponent} from "./registrar/registrar.component";

export const TramiteRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'lista-tramites',
        component: TramiteComponent,
      },
      {
        path: 'registrar-tramites',
        component: RegistrarComponent,
      }
    ]
  }
]
