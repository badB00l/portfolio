import { AfterViewInit, Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Portfolio } from 'src/app/shared-module/models/view-models/portfolio';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements AfterViewInit {

  model: Portfolio = new Portfolio();

  constructor(private userService: UserService) {

  }

  ngAfterViewInit(): void {
    this.userService.getPortfolioThroughUserProfile().subscribe( m => {
      this.model = m;
    });
  }

}
