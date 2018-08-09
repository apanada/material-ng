import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { DataTableComponent } from './data-table/data-table.component';
import { UserDataTableComponent } from './user-data-table/user-data-table.component';
import { MaterialFormComponent } from './material-form/material-form.component';
import { CityDialogComponent } from './city-dialog/city-dialog.component';
import { NgTrimTextDirective } from './directives/ng-trim-text/ng-trim-text.directive';
import { TemplateFormComponent } from './template-form/template-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppFooterComponent,
    DataTableComponent,
    UserDataTableComponent,
    MaterialFormComponent,
    CityDialogComponent,
    NgTrimTextDirective,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  entryComponents: [
    CityDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
