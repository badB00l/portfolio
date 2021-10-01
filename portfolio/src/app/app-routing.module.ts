import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './user-portfolio/profile/profile.component';
import { UserPortfolioModule } from './user-portfolio/user-portfolio.module';

const routes: Routes = [
  {path: '', redirectTo: '/profile', pathMatch: 'full'},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), UserPortfolioModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
