import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { ApplicantsComponent } from './pages/applicants/applicants.component';
import {ReportsComponent} from './pages/reports/reports.component';
import { CreateVacanciesComponent } from './pages/create-vacancies/create-vacancies.component';

const routes: Routes = [
  {path:'Landing',component:LandingPageComponent},
  {path:'applicants',component:ApplicantsComponent},
  {path:'addvacancies',component:CreateVacanciesComponent},
  {path:':text', component:UsersComponent},
  {path:'cadastro/:text', component:SignUpComponent},
  {path:'login/:text', component:LoginComponent},
  {path:'home',component: HomeComponent},
  {path:'reports',component:ReportsComponent},
  {path:'search',component:SearchComponent},
 
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
