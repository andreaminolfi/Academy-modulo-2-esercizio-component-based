import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserListComponent } from './components/user-list.component';
import { UserFormComponent } from './components/user-form.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    UserListComponent,
    UserFormComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
