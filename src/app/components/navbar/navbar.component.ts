import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../classes/profile';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  profile: Profile;

  constructor(private profileService: ProfileService) {
    this.profile = this.profileService.profiles[0];
  }

  ngOnInit() {

  }

}
