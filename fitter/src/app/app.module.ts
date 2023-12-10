import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientManagementComponent } from './components/client-management/client-management.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent,
    AppointmentFormComponent,
    CalendarComponent,
    ClientManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
