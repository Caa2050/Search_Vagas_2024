import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderLoginComponent } from './components/header-login/header-login.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { UsersComponent } from './pages/users/users.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignupFormRecrutadoresComponent } from './components/signup-form-recrutadores/signup-form-recrutadores.component';
import { SignupFormAlunosComponent } from './components/signup-form-alunos/signup-form-alunos.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { ApplicantsComponent } from './pages/applicants/applicants.component';
import { CreateVacanciesComponent } from './pages/create-vacancies/create-vacancies.component';
import { UserOptionsComponent } from './components/user-options/user-options.component';
import { ReportsComponent } from './pages/reports/reports.component';
import {NgxMaskDirective,provideNgxMask} from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { VacanciesFormComponent } from './components/vacancies-form/vacancies-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FooterComponent,
    LoginComponent,
    HeaderLoginComponent,
    HeaderMenuComponent,
    UsersComponent,
    SignUpComponent,
    SignupFormRecrutadoresComponent,
    SignupFormAlunosComponent,
    HomeComponent,
    SearchComponent,
    CurriculumComponent,
    ApplicantsComponent,
    CreateVacanciesComponent,
    UserOptionsComponent,
    ReportsComponent,
    VacanciesFormComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxMaskDirective,
  
  ],
  providers: [provideNgxMask({})],
  bootstrap: [AppComponent]
})
export class AppModule { }
