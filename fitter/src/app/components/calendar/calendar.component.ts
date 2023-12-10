// components/calendar/calendar.component.ts
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { Subject } from 'rxjs';
import { AppointmentService } from '../../services/appointment.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Appointment } from '../../models/appointment.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnInit {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  events$: Observable<CalendarEvent[]>;
  refresh: Subject<any> = new Subject();

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit() {
    this.events$ = this.appointmentService.getAppointments().pipe(
      map((appointments) =>
        appointments.map((appointment) => ({
          title: 'Appointment',
          start: new Date(appointment.dateTime),
          end: new Date(appointment.dateTime),
          color: { primary: '#1e90ff', secondary: '#D1E8FF' },
          meta: appointment,
        }))
      )
    );
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    // Handle day click if needed
  }
}
