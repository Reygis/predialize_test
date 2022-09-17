import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

import { Observable } from 'rxjs';

export interface Clients {
  _id : string;
  name: string;
  image_src: string;
  numOfEnterprises: number;
  numOfRealties: number;
}

@Injectable()
export class ClientService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Clients[]> {
    return this.http.get<Clients[]>(this.apiUrl)
  }

  getById() {}

  getByName() {}

  getGeneralTotals() {}

  getTotalsByCompany() {}
}
