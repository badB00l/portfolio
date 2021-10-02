import { Injectable } from '@angular/core';
import { Result } from '../dtos/result';
import { Portfolio } from '../view-models/portfolio';
import { IConverter } from './i-converter';

@Injectable({
  providedIn: 'root'
})
export class PortfolioConverter implements IConverter{

  modelToDto(dto: Portfolio): Result {
    throw new Error('Method not implemented.');
  }
  dtoToModel(dto: Result): Portfolio {
    if(!dto) {
      return new Portfolio();
    }
    return new Portfolio(dto.name && dto.name.first,
                        dto.name && dto.name.last,
                        dto.name && dto.name.title,
                        dto.email,
                        dto.phone,
                        dto.dob && dto.dob.date,
                        dto.login && dto.login.password,
                        dto.picture.large,
                        dto.picture.large);
  }

}
