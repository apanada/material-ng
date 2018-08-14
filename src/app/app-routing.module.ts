import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { UserDataTableComponent } from './user-data-table/user-data-table.component';
import { MaterialFormComponent } from './material-form/material-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: 'data-table', component: DataTableComponent },
  { path: 'user-data-table', component: UserDataTableComponent },
  { path: 'material-form', component: MaterialFormComponent },
  { path: 'template-form', component: TemplateFormComponent },
  { path: 'card', component: CardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
