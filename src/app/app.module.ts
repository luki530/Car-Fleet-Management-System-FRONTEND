import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ConfirmEmailComponent } from './confirmemail/confirmemail.component';
import { ConfirmPhoneNumberComponent } from './confirmphonenumber/confirmphonenumber.component';
import { ResetPasswordComponent } from './resetpassword/resetpassword.component';
import { ChangePasswordComponent } from './changepassword/changepassword.component';
import { ListOfUsersComponent } from './listofusers/listofusers.component';
import { UserProfileComponent } from './userprofile/userprofile.component';
import { AddCardComponent } from './addcard/addcard.component';
import { CookieService } from 'ngx-cookie-service';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  MatFormFieldModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatCardModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatOptionModule,
  MatSortModule,
  MatCheckboxModule,
  MatSnackBarModule


} from '@angular/material';
import { SettingsComponent } from './settings/settings.component';
import { ConnectionService } from './_services/connection.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    ProfileComponent,
    ConfirmEmailComponent,
    ConfirmPhoneNumberComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    ListOfUsersComponent,
    UserProfileComponent,
    AddCardComponent,
    LogoutPageComponent,
    ContactComponent,
    AboutComponent,
    SettingsComponent
  ],
  entryComponents: [AddCardComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTabsModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSnackBarModule,
    FontAwesomeModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders, CookieService, ConnectionService],
  bootstrap: [AppComponent]
})

export class AppModule { }
