import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import  { CompetitionsComponent } from './competitions/competitions.component';
import  { CompetitionDetailComponent } from './competition-detail/competition-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/competitions', pathMatch: 'full' },
  { path: 'competitions',     component: CompetitionsComponent },
  { path: 'competitions/:id', component: CompetitionDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
