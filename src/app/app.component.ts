import { Component, inject, OnInit } from '@angular/core';
import { RbacService } from './rbac.service';
import { RouterOutlet } from '@angular/router';
import { Roles } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  readonly rbacService = inject(RbacService);

  constructor() {
    // Assuming the roles and authenticated came from the server
    this.rbacService.setRoles([
      {
        id: 1,
        name: 'User',
        uid: 'USER',
        extends: null
      },
      {
        id: 2,
        name: 'Staff',
        uid: 'STAFF',
        extends: 1
      },
      {
        id: 3,
        name: 'Administrator',
        uid: 'ADMINISTRATOR',
        extends: 2
      }
    ]);
    this.rbacService.setAuthenticatedUser({
      id: 1,
      name: 'User',
      role: {
        id: 3,
        name: 'Administrator',
        uid: 'USER',
        extends: 2
      }
    });
  }

  ngOnInit() {
    if (this.rbacService.isGranted(Roles.ADMINISTRATOR)) {
      console.log('Access granted for administrator!');
    } else {
      console.log('Access denied for administrator!');
    }

    if (this.rbacService.isGranted(Roles.STAFF)) {
      console.log('Access granted for staff!');
    } else {
      console.log('Access denied for staff!');
    }

    if (this.rbacService.isGranted(Roles.USER)) {
      console.log('Access granted for user!');
    } else {
      console.log('Access denied for user!');
    }
  }
}