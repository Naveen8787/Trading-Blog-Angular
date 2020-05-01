import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {CropDetailsComponent} from './crop-details/crop-details.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {HomeComponent} from './home/home.component';
import {MatListModule} from '@angular/material/list';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {CalculationComponent} from './calculation/calculation.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegistrationComponent,
    CropDetailsComponent,
    HomeComponent,
    CalculationComponent
  ],
  imports: [
    FormsModule,
    Ng2SearchPipeModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule{ }
