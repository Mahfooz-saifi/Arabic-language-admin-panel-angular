import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApproveAgencyComponent } from './component/approve-agency/approve-agency.component';

const routes: Routes = [
  {path: '', component:ApproveAgencyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
