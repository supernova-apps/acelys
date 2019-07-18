import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IncidentsPage } from './incidents.page';

const routes: Routes = [
  {
    path: '',
    component: IncidentsPage,
    children: [
      {
        path: 'tohandle',
        loadChildren: '../to-handle/to-handle.module#ToHandlePageModule'
      },
      {
        path: 'history',
        loadChildren: '../history/history.module#HistoryPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tohandle',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IncidentsPage]
})
export class IncidentsPageModule { }
