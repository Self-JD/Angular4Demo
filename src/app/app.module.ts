import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';

//Components
import { HeaderComponent } from './components/header/header.component';
import { LoginfoComponent } from './components/loginfo/loginfo.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

//Services
import { LoginServiceService } from './services/login/login-service.service';
import { AlertService } from './services/alert/alert.service';

//Directive
import { AlertComponent } from './components/_directives/index';

const appRoutes: Routes = [
  {path:"", component:HomeComponent},
  {path:"dashboard", component:DashboardComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    HeaderComponent,
    LoginfoComponent,
    FooterComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginServiceService, AlertService],
  bootstrap: [AppComponent]
})

export class AppModule { }
