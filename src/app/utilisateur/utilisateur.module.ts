import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { ReclamationComponent } from './reclamation/reclamation.component';



@NgModule({
  declarations: [
    ClientComponent,
    ReclamationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UtilisateurModule { }
