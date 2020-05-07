import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ConfirmEmailComponent } from './confirmemail/confirmemail.component';
import { ConfirmPhoneNumberComponent } from './confirmphonenumber/confirmphonenumber.component';
import { ResetPasswordComponent } from './resetpassword/resetpassword.component';
import { ChangePasswordComponent } from './changepassword/changepassword.component';
import { ListOfUsersComponent } from './listofusers/listofusers.component';
import { UserProfileComponent } from './userprofile/userprofile.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SettingsComponent } from './settings/settings.component';
import { CarsComponent } from './cars/cars.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'confirmemail', component: ConfirmEmailComponent},
  { path: 'confirmphonenumber', component: ConfirmPhoneNumberComponent},
  { path: 'resetpassword', component: ResetPasswordComponent},
  { path: 'changepassword', component: ChangePasswordComponent},
  { path: 'listofusers', component: ListOfUsersComponent },
  { path: 'userprofile', component: UserProfileComponent},
  { path: 'logoutpage', component: LogoutPageComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'cars', component: CarsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
