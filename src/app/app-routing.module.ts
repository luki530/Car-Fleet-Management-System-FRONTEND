import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ConfirmEmailComponent } from './confirmemail/confirmemail.component';
import { ConfirmPhoneNumberComponent } from './confirmphonenumber/confirmphonenumber.component';
import { ResetPasswordComponent } from './resetpassword/resetpassword.component';
import { ChangePasswordComponent } from './changepassword/changepassword.component';
import { ListOfUsersComponent } from './listofusers/listofusers.component';
import { UserProfileComponent } from './userprofile/userprofile.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CarsComponent } from './cars/cars.component';
import { CarProfileComponent } from './carprofile/carprofile.component';
import { CarLogsComponent } from './carlogs/carlogs.component';
import { LoggerDeviceDetailsComponent } from './loggerdevicedetails/loggerdevicedetails.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'confirmemail', component: ConfirmEmailComponent },
  { path: 'confirmphonenumber', component: ConfirmPhoneNumberComponent },
  { path: 'resetpassword', component: ResetPasswordComponent },
  { path: 'changepassword', component: ChangePasswordComponent },
  { path: 'listofusers', component: ListOfUsersComponent },
  { path: 'userprofile', component: UserProfileComponent },
  { path: 'logoutpage', component: LogoutPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'carprofile', component: CarProfileComponent },
  { path: 'loggerdevicedetails', component: LoggerDeviceDetailsComponent },
  { path: 'carlogs', component: CarLogsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
