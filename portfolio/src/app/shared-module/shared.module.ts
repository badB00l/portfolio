import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRestService } from './services/external/user-rest.service';
import { PortfolioConverter } from './models/converters/portfolio-converter';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [UserRestService,
              PortfolioConverter]
})
export class SharedModule { }
