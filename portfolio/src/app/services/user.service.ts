import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PortfolioConverter } from '../shared-module/models/converters/portfolio-converter';
import { ResponseWrapper } from '../shared-module/models/dtos/response-wrapper';
import { Portfolio } from '../shared-module/models/view-models/portfolio';
import { UserRestService } from '../shared-module/services/external/user-rest.service';
import { UserPortfolioModule } from '../user-portfolio/user-portfolio.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userRestService: UserRestService<ResponseWrapper>,
              private portfolioConverter: PortfolioConverter) { }


  getPortfolioThroughUserProfile(): Observable<Portfolio> {
    return this.userRestService.getUserProfile().pipe(
      map( (p: ResponseWrapper) => {
        const result = p.results[0];
        return this.portfolioConverter.dtoToModel(result);
      })
    );
  }
}
