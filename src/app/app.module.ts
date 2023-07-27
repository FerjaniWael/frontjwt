import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TemplateComponent } from './template/template.component'; 
import { BrowserModule } from '@angular/platform-browser';
import { TokenInterceptor } from './tokeninterceptor';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ModeratorGuard } from './moderator.guard';
import { UserGuard } from './user.guard';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'register',component:UserComponent},
      {path:'login',component:LoginComponent},
     
  
      
      ]),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    UserComponent,
    LoginComponent,
    HomeComponent,
    TemplateComponent,
    ChangepasswordComponent,


  ],

  providers: [ModeratorGuard,UserGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
