import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { ClientComponent } from './client.component';
import { ClientService } from 'src/app/services/client.service';
import {CommonModule} from '@angular/common'
export const ClientRoutes: Routes = [
  {
    path: 'client',
    component: ClientComponent
  }
];

@NgModule({
  declarations: [ClientComponent],
  providers: [ClientService],
  imports:[CommonModule]
})
export class ClientModule {}
