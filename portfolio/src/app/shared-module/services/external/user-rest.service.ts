import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment';
import { IEnv } from '../../models/i-env/ienv';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {
  apiServiceRef: string = 'user';
  private env: IEnv = environment;
  constructor(private restClient: HttpClient) {

  }

  getUser() {
    const apiUrl = environment.SERVER_BASE_PATH + this.env.configurations.api.hosts[this.apiServiceRef];
    this.restClient.get(apiUrl).subscribe( r => {

    });
  }
}
