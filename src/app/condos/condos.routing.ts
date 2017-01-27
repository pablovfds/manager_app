import { Routes, RouterModule } from '@angular/router';

import { RegisterCondoComponent } from './register-condo/register-condo.component';
import { CondoDetailsComponent } from './condo-details/condo-details.component';

const condosRoutes: Routes = [
  //{ path: 'condos', component: HomeComponent, pathMatch: 'full' },
  { path: 'condos/new', component: RegisterCondoComponent},
  { path: 'condos/:id', component: CondoDetailsComponent}
];

export const condosRouting = RouterModule.forChild(condosRoutes);