import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IEnv } from '../../models/i-env/ienv';
import { ResponseWrapper } from '../../models/dtos/response-wrapper';

@Injectable({
  providedIn: 'root'
})
export class UserRestService<ResponseWrapper> {
  apiServiceRef: string = 'user';
  private env: IEnv = environment;
  constructor(private restClient: HttpClient) {

  }

  getUserProfile(): Observable<ResponseWrapper> {
    const apiUrl = environment.SERVER_BASE_PATH + this.env.configurations.api.hosts[this.apiServiceRef];
    return this.restClient.get(apiUrl) as Observable<ResponseWrapper>;
  }
}
