import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UesrRegisterComponent } from './uesr-register/uesr-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { AddCompliantComponent } from './add-compliant/add-compliant.component';
import { ViewComplaintsComponent } from './view-complaints/view-complaints.component';

const myRoute:Routes = [
  {
    path: "",
    component : AdminComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UesrRegisterComponent,
    UserLoginComponent,
    ViewProfileComponent,
    AddCompliantComponent,
    ViewComplaintsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
