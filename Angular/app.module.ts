import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employee/employees.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NgstyleComponent,
    NgclassComponent,
    NgswitchComponent,
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
