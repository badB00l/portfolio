import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRestService } from './services/external/user-rest.service';
import { PortfolioConverter } from './models/converters/portfolio-converter';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [UserRestService,
              PortfolioConverter]
})
export class SharedModule { }
