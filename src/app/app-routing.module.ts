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
  { path: 'home', component: HomeComponent, data: { animation: 'home' } },
  { path: 'login', component: LoginComponent, data: { animation: 'login' } },
  { path: 'register', component: RegisterComponent, data: { animation: 'register' } },
  { path: 'profile', component: ProfileComponent, data: { animation: 'profile' } },
  { path: 'confirmemail', component: ConfirmEmailComponent, data: { animation: 'confirmemail' } },
  { path: 'confirmphonenumber', component: ConfirmPhoneNumberComponent, data: { animation: 'confirmphonenumber' } },
  { path: 'resetpassword', component: ResetPasswordComponent, data: { animation: 'resetpassword' } },
  { path: 'changepassword', component: ChangePasswordComponent, data: { animation: 'changepassword' } },
  { path: 'listofusers', component: ListOfUsersComponent, data: { animation: 'listofusers' } },
  { path: 'userprofile', component: UserProfileComponent, data: { animation: 'userprofile' } },
  { path: 'logoutpage', component: LogoutPageComponent, data: { animation: 'logoutpage' } },
  { path: 'about', component: AboutComponent, data: { animation: 'about' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'contact' } },
  { path: 'cars', component: CarsComponent, data: { animation: 'cars' } },
  { path: 'carprofile', component: CarProfileComponent, data: { animation: 'carprofile' } },
  { path: 'loggerdevicedetails', component: LoggerDeviceDetailsComponent, data: { animation: 'loggerdevicedetails' } },
  { path: 'carlogs', component: CarLogsComponent, data: { animation: 'carlogs' } },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
