import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-list',
  template: `
    <app-user-list-item *ngFor="let u of items" [item]="u" (delete)="deleteHandler($event)"></app-user-list-item>
  `,
})
export class UserListComponent {
  @Input() items: User[] = [];
  // @Output() delete = new EventEmitter<User>();

  deleteHandler(user: User) {
    const indexToRemove = this.items.findIndex((u) => u.id === user.id);
    this.items.splice(indexToRemove, 1);
  }
}
