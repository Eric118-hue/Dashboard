import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { RoleService } from './services/role.service';

export const routes: Routes = [
    {
      path: '', 
      pathMatch: 'full',
      redirectTo: 'dashboard'
    },
    {
      path: 'dashboard', 
      loadChildren: () => import('./pages/dashboard/routes').then(c => c.routes)
    },
    { 
      path: 'live-tracking', 
      loadComponent: () => import('./pages/live-tracking/live-tracking.component').then(c => c.LiveTrackingComponent),
      canMatch: [],
    },
    { 
      path: 'reports', 
      loadComponent: () => import('./pages/reports/reports.component').then(c => c.ReportsComponent),
      canMatch: [],
    },
    { 
      path: 'trajet', 
      loadComponent: () => import('./pages/trajet/trajet.component').then(c => c.TrajetComponent),
      canMatch: [],
    },
    { 
      path: 'passenger-control', 
      loadComponent: () => import('./pages/passenger-control/passenger-control.component').then(c => c.PassengerControlComponent),
      canMatch: [],
    },
    { 
      path: 'driving-point', 
      loadComponent: () => import('./pages/driving-point/driving-point.component').then(c => c.DrivingPointComponent),
      canMatch: [],
    },
    { 
      path: 'configurations', 
      loadComponent: () => import('./pages/configurations/configurations.component').then(c => c.ConfigurationsComponent),
      canMatch: [() => inject(RoleService).isSuperAdmin()],
    },
    { 
      path: '**', 
      loadComponent: () => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent),
      canMatch: [],
    },   
];
