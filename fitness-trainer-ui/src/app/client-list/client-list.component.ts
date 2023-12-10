// src/app/client-list/client-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentDialogComponent } from './appointment-dialog/appointment-dialog.component';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientService: ClientService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.clients = this.clientService.getClients();
  }

  addAppointment(client: Client): void {
    const dialogRef = this.dialog.open(AppointmentDialogComponent, {
      width: '300px',
      data: { appointment: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        client.appointments.push(result);
      }
    });
  }
}
