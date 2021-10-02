import { Injectable, HttpClient } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {

  constructor(private httpRestService: HttpClient) { }
}
