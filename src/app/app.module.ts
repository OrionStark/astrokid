import { MnFullpageModule } from 'ngx-fullpage';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UsersService } from './data-component/users/users.service';

// Bootstrap Javascript Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

// Routing modals
import { Route } from '@angular/router/src/config';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginPageComponent } from './login-page/login-page.component';
import { Component } from '@angular/core/src/metadata/directives';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LostPageComponent } from './lost-page/lost-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ExplorationPageComponent } from './exploration-page/exploration-page.component';
import { AboutusPageComponent } from './aboutus-page/aboutus-page.component';
import { StarsSelectionComponent } from './stars-selection/stars-selection.component';
import { HumanTechnologyComponent } from './human-technology/human-technology.component';
import { SplashExploreComponent } from './splash-explore/splash-explore.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

// Material Design Modul

const appRoutes:Routes = [
  { path: '', component: WelcomePageComponent },
  { path: '404', component: LostPageComponent },
  { path: 'login', component: LoginPageComponent, data: { state: 'login' } },
  { path: 'register', component: RegisterPageComponent, data: { state: 'register' } },
  { path: 'aboutus', component: AboutusPageComponent, data: { state: 'aboutus' } },
  { path: 'starsselect', component: StarsSelectionComponent, data: { state: 'starsselect' } },
  { path: 'humantechnology', component: HumanTechnologyComponent, data: { state: 'humantechnology' } },
  { path: 'exploration' , component: SplashExploreComponent, data: { state: 'exploration' }},
  { path: 'loading', component: LoadingScreenComponent, data: { state: 'loading' } },
  { path: 'dashboard', component: DashboardPageComponent, data: { state: 'dashboard' } }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    WelcomePageComponent,
    LostPageComponent,
    RegisterPageComponent,
    ExplorationPageComponent,
    AboutusPageComponent,
    StarsSelectionComponent,
    HumanTechnologyComponent,
    SplashExploreComponent,
    LoadingScreenComponent,
    DashboardPageComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    ScrollToModule.forRoot(),
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    MnFullpageModule.forRoot(),
    FormsModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
