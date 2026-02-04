import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Error404 } from './pages/error-404/error-404';

export const routes: Routes = [
    {
        path: '',
        component: Inicio,
        pathMatch: 'full'

    },
    {
        path: '**',
        component: Error404
    }

];
