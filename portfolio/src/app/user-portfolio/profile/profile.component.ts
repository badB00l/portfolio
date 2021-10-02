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
  placeholder: string | undefined = "";
  constructor(private userService: UserService) {

  }

  ngAfterViewInit(): void {
    this.userService.getPortfolioThroughUserProfile().subscribe( m => {
      this.model = m;
      this.placeholder = "My name is " + this.model.completeName;
    });
  }

  changePlaceholder(newPlaceholder: string | undefined, caller?: string) {
    let prefix: string = "";
    if(caller) {
      prefix = this.getPrefixForCaller(caller);
    }
    this.placeholder = prefix + newPlaceholder;
  }

  getPrefixForCaller(caller: string): string {
    let prefix = "";
    switch (caller) {
      case "person":
        prefix = "Hi, my name is ";
        break;
      case "phone":
        prefix = "my phone number is ";
        break;
      case "map":
        prefix = "my address is ";
        break;
      case "email":
        prefix = "my email is ";
        break;
      case "birthDate":
        prefix = "my birthday is ";
        break;
      case "password":
        prefix = "my password is ";
        break;
    }

    return prefix;
  }
}
