import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-list-item',
  template: `
    <div class="list-group-item d-flex justify-content-between">
      <i class="fa fa-2x" [ngClass]="{ 'fa-mars' : item.gender === 'M', 'fa-venus': item.gender === 'F' }" [style.color]="item.gender === 'M' ? 'blue': 'pink'"> 
      </i>
      {{item.label}}
      <i class="fa fa-trash" (click)="delete.emit(item)"></i><i class="fa fa-arrow-down" (click)="openClose()"></i>      
    </div>
    <div *ngIf="isOpen===true" class="list-group-item d-flex justify-content-between">
      Età: {{item.age}}
    </div>
  `,
})
export class UserListItemComponent {
  @Input() item: User = null;
  @Output() delete = new EventEmitter<User>();
  isOpen: boolean = false;

  openClose() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }
}
