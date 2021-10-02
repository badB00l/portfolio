import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRestService } from './services/external/user-rest.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [UserRestService]
})
export class SharedModule { }
