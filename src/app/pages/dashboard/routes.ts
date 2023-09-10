import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./dashboard.component').then(c => c.DashboardComponent),
    children: [
      {
        path: 'overview',
        loadComponent: () => import('./pages/overview/overview.component').then(c => c.OverviewComponent),
        outlet: 'dashboard',
      },
      {
        path: 'violation-analysis',
        loadComponent: () => import('./pages/violation-analysis/violation-analysis.component').then(c => c.ViolationAnalysisComponent),
        outlet: 'dashboard',
      },
      {
        path: 'trends',
        loadComponent: () => import('./pages/trends/trends.component').then(c => c.TrendsComponent),
        outlet: 'dashboard',
      },
      {
        path: 'trip-passenger',
        loadComponent: () => import('./pages/trip-passenger/trip-passenger.component').then(c => c.TripPassengerComponent),
        outlet: 'dashboard',
      }
    ]
  },
];
