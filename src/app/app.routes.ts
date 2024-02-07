import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/login'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((mod) => mod.LoginComponent),
  },
  {
    path: 'students',
    loadComponent: () =>
      import('./student-dashboard/student-dashboard.component').then(
        (mod) => mod.StudentDashboardComponent
      ),
  },

  //Wild Card Route for 404 request
  {
    path: '**',
    pathMatch: 'full',
    loadComponent: () =>
      import('./page-not-found/page-not-found.component').then(
        (mod) => mod.PageNotFoundComponent
      ),
  },
];
