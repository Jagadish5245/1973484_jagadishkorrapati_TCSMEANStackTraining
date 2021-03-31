import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { myAuthGaurd } from './myauthgaurd';

const routes: Routes = [
  {path:"\aboutus",component:AboutusComponent},
  {path:"\contactus",component:ContactusComponent},
  {path:"\login",component:LoginComponent},
  {path:"\home",component:DashboardComponent,canActivate:[myAuthGaurd]},
  {path:"",redirectTo:"\login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

