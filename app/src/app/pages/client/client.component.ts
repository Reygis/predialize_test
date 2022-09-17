import { Component, OnInit } from "@angular/core";
import {ClientService} from '../../services/client.service'


export interface Clients {
  _id : string;
  name: string;
  image_src: string;
  numOfEnterprises: number;
  numOfRealties: number;
}

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {
  clients: Clients[] = []

 
  constructor(private clientService: ClientService) {
    this.getAll();
  }

  ngOnInit():void {}

  getAll(): void {
    this.clientService.getAll().subscribe((clients)=> (this.clients = clients))
  }
}
