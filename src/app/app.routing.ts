import { RouterModule, Routes } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AddbusinessComponent} from './addbusiness/addbusiness.component';
import {IndexComponent} from './index.component';



const appRoutes: Routes = [
  { path: 'addbusiness', component: AddbusinessComponent },
  { path: '', component: IndexComponent }
  // { path: '**', component: PageNotFoundComponent }
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);

