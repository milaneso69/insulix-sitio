import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Error404 } from './pages/error-404/error-404';
import { Login } from './pages/login/login';

export const routes: Routes = [
    {
        path: '',
        component: Inicio,
        pathMatch: 'full'

    },
    {
        path: 'in-login',
        component: Login
    },
    {
        path: '**',
        component: Error404
    }

];
