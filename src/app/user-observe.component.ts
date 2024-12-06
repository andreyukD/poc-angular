import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {UserService} from './user.service';

@Component({
  standalone: false,
  selector: 'app-user-observe',
  template: `
    <div>test</div>
    <div *ngIf="userData">
      <p><b>id:</b> {{ userData._id }}</p>
      <p><b>name:</b> {{ userData.name }}</p>
      <p><b>age:</b> {{ userData.age }}</p>
    </div>
  `,
})
export class UserObserveComponent implements OnInit, OnDestroy {
  userData: any;

  constructor(private userService: UserService) {
    const userId = '6752e76ae970ef9698f539f6';
    this.userService.get$(userId).subscribe((update) => {
      if (update._id === userId) {
        this.userData = update;
      }
    });
  }

  ngOnInit() {}

  ngOnDestroy() {}
}
