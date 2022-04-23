import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-list',
  template: `
    <app-user-list-item *ngFor="let u of items" [item]="u"></app-user-list-item>
  `,
})
export class UserListComponent {
  @Input() items: User[] = [];
  @Output() delete = new EventEmitter<User>();
}
