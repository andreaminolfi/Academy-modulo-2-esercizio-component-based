import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-user-form',
  template: `
    <div
      class="panel m-1 text-center"
      [ngClass]="{
        male: f.value.gender === 'M',
        female: f.value.gender === 'F'
      }"
    >
      <form #f="ngForm" (submit)="saveHandler(f)">
        <input
          type="text"
          [ngModel]
          name="label"
          #inputLabel
          placeholder="Add user name"
          class="form-control mb-1"
          required
        />

        <select [ngModel] name="gender" class="form-control  mb-1" required>
          <option [value]="null">Select Gender</option>
          <option value="M">M</option>
          <option value="F">F</option>
        </select>

        <button class="btn btn-success" [disabled]="f.invalid">Save</button>
      </form>
    </div>
  `
})
export class UserFormComponent {
  @Output() save = new EventEmitter<User>();

  saveHandler(form: NgForm) {
    this.save.emit(form.value);
    form.reset();
  }
}