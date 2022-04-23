import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserListComponent } from './components/user-list.component';
import { UserFormComponent } from './components/user-form.component';
import { UserListItemComponent } from './components/user-list-item.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    UserListComponent,
    UserFormComponent,
    UserListItemComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
