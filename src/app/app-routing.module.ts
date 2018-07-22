import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { UserDataTableComponent } from './user-data-table/user-data-table.component';

const routes: Routes = [
  { path: 'data-table', component: DataTableComponent },
  { path: 'user-data-table', component: UserDataTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
