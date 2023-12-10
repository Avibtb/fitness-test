// src/app/client.service.ts
import { Injectable } from '@angular/core';
import { Client } from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clients: Client[] = [];

  getClients(): Client[] {
    return this.clients;
  }

  addClient(client: Client): void {
    this.clients.push(client);
  }
}
