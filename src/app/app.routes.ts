import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./componentes/home/home.component";
import { EstadisticasComponent } from "./componentes/estadisticas/estadisticas.component";
import { ProcesamientoComponent } from "./componentes/procesamiento/procesamiento.component";
import { CallbackComponent } from "./componentes/callback/callback.component";
import { AuthGuard } from "./services/auth.guard";

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'estadisticas', component: EstadisticasComponent },
  {
    path: 'procesamiento',
    component: ProcesamientoComponent,
    canActivate: [AuthGuard]
  },
  { path: 'callback', component: CallbackComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
