import { Component, OnInit } from "@angular/core";
import {EnterpriseService} from '../../services/enterprise.service'


export interface Enterprises {
	  clientName: string;
		enterprise: [{
				_id: string;
				name: string;
				image_src: string;
				realties: string
			}];
}

@Component({
  selector: "app-enterprise",
  templateUrl: "./enterprise.component.html",
  styleUrls: ["./enterprise.component.scss"],
})
export class EnterpriseComponent implements OnInit {
  enterprises: Enterprises[] = []

  constructor( private enterpriseService: EnterpriseService ) {
    this.getAll();
  }

  ngOnInit(): void {}

  getAll(): void {
    this.enterpriseService.getAll().subscribe((enterprises)=> (this.enterprises = enterprises))
  }
}
