import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {CalculationComponent} from './calculation/calculation.component';
import { CropDetailsComponent } from './crop-details/crop-details.component';

const routes: Routes = [
{path:'cropdetails',component:CropDetailsComponent},
/*{path:'header',component:CropDetailsComponent},*/
{path: '',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'registration',component:RegistrationComponent},
{path: 'calculation',component:CalculationComponent}]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
