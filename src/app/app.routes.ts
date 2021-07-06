import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
];
