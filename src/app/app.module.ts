import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { StudentRegistrationComponent } from './studentRegistration/studentRegistration.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentRegistrationComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
