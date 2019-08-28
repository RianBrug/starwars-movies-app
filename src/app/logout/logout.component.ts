import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services'

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private _authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this._authService.logout();
    this.router.navigate(['login']);
  }

}
