import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-list',
  template: `
    <div *ngFor="let u of items" class="list-group-item d-flex justify-content-between">
      <i class="fa fa-2x" [ngClass]="{ 'fa-mars' : u.gender === 'M', 'fa-venus': u.gender === 'F' }" [style.color]="u.gender === 'M' ? 'blue': 'pink'"> 
      </i>
      {{u.label}}
      <i class="fa fa-trash" (click)="delete.emit(u)"></i>
    </div>
  `,
})
export class UserListComponent {
  @Input() items: User[] = [];
  @Output() delete = new EventEmitter<User>();
}
