import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadsComponent } from './leads/leads.component';
import { PotentialduplicatesComponent } from './leads/potentialduplicates/potentialduplicates.component';

const routes: Routes = [{
  path: '',
  component: LeadsComponent
}
  ,
{
  path: 'potentialduplicates/:id',
  component: PotentialduplicatesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
