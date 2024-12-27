import { Routes } from '@angular/router';
import { PricingPageComponent } from './pages/pricing-page/pricing-page.component';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () => import('./pages/abaout-page/abaout-page.component').then(m => m.AbaoutPageComponent)
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing-page/pricing-page.component').then(m => m.PricingPageComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact-page/contact-page.component').then(m => m.ContactPageComponent)
  },
  {
    path: '**',
    redirectTo: 'about',
    pathMatch: 'full'
  }
];
