import { AfterViewInit, Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements AfterViewInit {

  constructor(private userService: UserService) {

  }

  ngAfterViewInit(): void {

  }

}
