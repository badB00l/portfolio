import { Injectable } from '@angular/core';
import { UserRestService } from '../shared-module/services/user-rest.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userRestService: UserRestService) { }


}
