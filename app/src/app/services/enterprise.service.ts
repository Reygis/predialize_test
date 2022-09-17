import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

import { Observable } from 'rxjs';

export interface Enterprises {
  clientName: string,
  enterprise: [{
      _id: string,
      name: string,
      image_src: string,
      realties: string
    }]
}


@Injectable()
export class EnterpriseService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}  

  getAll(): Observable<Enterprises[]> {
    return this.http.get<Enterprises[]>(this.apiUrl)
  }

  getById() {}

  getByName() {}

  getTotalsByEnterprise() {}

  getEnterprisesByCompany() {}
}
