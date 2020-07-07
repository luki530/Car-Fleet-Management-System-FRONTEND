import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ConnectionService } from './_services/connection.service';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
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
import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './addcar/addcar.component';
import { AddLoggerDeviceComponent } from './addloggerdevice/addloggerdevice.component';
import { CarProfileComponent } from './carprofile/carprofile.component';
import { CarLogsComponent } from './carlogs/carlogs.component';

import { AppMaterialModule } from "./app-material.module";
import { ThemeService } from './theme.service';
import { StyleManagerService } from './style-manager.service';
import { DeleteAccountComponent } from './deleteaccount/deleteaccount.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
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
    CarProfileComponent,
    DeleteAccountComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    GoogleMapsModule,
    NgxMaterialTimepickerModule.setLocale('pl-PL'),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    AppMaterialModule
  ],
  providers: [authInterceptorProviders, CookieService, ConnectionService, ThemeService, StyleManagerService],
  bootstrap: [AppComponent],
  entryComponents: [AssignLoggerDeviceComponent,
    AssignRolesComponent,
    DeleteCarComponent,
    DeleteAccountComponent,
    DeleteLoggerDeviceComponent,
    DeleteUserComponent,
    AddCardComponent,
    AddLoggerDeviceComponent,
    AddCarComponent]
})

export class AppModule {

}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/', '.json');
}
