import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ConnectionService } from './_services/connection.service';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
import { ConfirmEmailComponent } from './confirmemail/confirmemail.component';
import { ConfirmPhoneNumberComponent } from './confirmphonenumber/confirmphonenumber.component';
import { ResetPasswordComponent } from './resetpassword/resetpassword.component';
import { ChangePasswordComponent } from './changepassword/changepassword.component';
import { ListOfUsersComponent } from './listofusers/listofusers.component';
import { UserProfileComponent } from './userprofile/userprofile.component';
import { AddCardComponent } from './addcard/addcard.component';
import { LoggerDeviceDetailsComponent } from './loggerdevicedetails/loggerdevicedetails.component';
import { DeleteUserComponent } from './deleteuser/deleteuser.component';
import { DeleteCarComponent } from './deletecar/deletecar.component';
import { DeleteLoggerDeviceComponent } from './deleteloggerdevice/deleteloggerdevice.component';
import { AssignRolesComponent } from './assignroles/assignroles.component';
import { AssignLoggerDeviceComponent } from './assignloggerdevice/assignloggerdevice.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { SettingsComponent } from './settings/settings.component';
import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './addcar/addcar.component';
import { AddLoggerDeviceComponent } from './addloggerdevice/addloggerdevice.component';
import { CarProfileComponent } from './carprofile/carprofile.component';
import { CarLogsComponent } from './carlogs/carlogs.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';


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
    SettingsComponent,
    CarsComponent,
    AddCarComponent,
    AddLoggerDeviceComponent,
    DeleteCarComponent,
    DeleteLoggerDeviceComponent,
    DeleteUserComponent,
    LoggerDeviceDetailsComponent,
    AssignRolesComponent,
    AssignLoggerDeviceComponent,
    CarLogsComponent,
    CarProfileComponent

  ],

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
    ReactiveFormsModule,
    GoogleMapsModule,
    NgxMaterialTimepickerModule.setLocale('pl-PL'),
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatSliderModule
  ],
  providers: [authInterceptorProviders, CookieService, ConnectionService, MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [AssignLoggerDeviceComponent, AssignRolesComponent,
    DeleteCarComponent,
    DeleteLoggerDeviceComponent,
    DeleteUserComponent,
    AddCardComponent,
    AddLoggerDeviceComponent,
    AddCarComponent]
})

export class AppModule { }
