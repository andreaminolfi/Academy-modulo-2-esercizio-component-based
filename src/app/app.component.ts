import { Component, VERSION } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: User[] = [
    { id: 1, label: 'Fabio', gender: 'M', age: 20 },
    { id: 2, label: 'Lorenzo', gender: 'M', age: 37 },
    { id: 3, label: 'Silvia', gender: 'F', age: 70 },
  ];

  addHandler(user: User) {
    const newUser = {
      id: Date.now,
      ...user,
    };
    this.users.push(newUser);
  }
}
