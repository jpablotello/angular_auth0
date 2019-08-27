import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';
import { ProcesamientoComponent } from './componentes/procesamiento/procesamiento.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'estadisticas', component: EstadisticasComponent },
    { path: 'procesamiento', component: ProcesamientoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
