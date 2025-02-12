import { Routes } from '@angular/router';
import { DatosComponent } from './shared/datos/datos.component';
import { HomeComponent } from './shared/home/home.component';

export const routes: Routes = [
  { path: 'datos', component:  DatosComponent},
  { path: 'home', component: HomeComponent}
];