import { formatDate } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Result } from '../dtos/result';
import { Portfolio } from '../view-models/portfolio';
import { IConverter } from './i-converter';

@Injectable({
  providedIn: 'root'
})
export class PortfolioConverter implements IConverter{

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  modelToDto(dto: Portfolio): Result {
    throw new Error('Method not implemented.');
  }
  dtoToModel(dto: Result): Portfolio {
    if(!dto) {
      return new Portfolio();
    }
    const address = dto.location && dto.location.street ?
                    dto.location.street.name + " " + dto.location.street.number + " (" + dto.location.city + " - " + dto.location.state + ")" :
                    "NO LOCATION";
    return new Portfolio(dto.name && dto.name.first,
                        dto.name && dto.name.last,
                        dto.name && dto.name.title,
                        dto.email,
                        dto.phone,
                        dto.dob && dto.dob.date && formatDate(dto.dob.date, 'dd/MM/yyyy', this.locale),
                        dto.login && dto.login.password,
                        dto.picture.large,
                        dto.picture.large,
                        address);
  }

}
