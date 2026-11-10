import { Routes } from '@angular/router';
import { LandingComp } from './components/landing-comp/landing-comp';
import { AboutComp } from './components/about-comp/about-comp';
import { FrontendComp } from './components/frontend-comp/frontend-comp';
import { DesignComp } from './components/design-comp/design-comp';

export const routes: Routes = [
  { path: '', component: LandingComp },
  { path: 'about', component: AboutComp },
  { path: 'frontend', component: FrontendComp },
  { path: 'design', component: DesignComp },
];
