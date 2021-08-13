import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RiceitemComponent } from './riceitem/riceitem.component';
import { ConfirmpageComponent } from './confirmpage/confirmpage.component';
import { RoutingComponent } from './routing/routing.component';
import { ItemhttpComponent } from './itemhttp/itemhttp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
    RiceitemComponent,
    ConfirmpageComponent,
    RoutingComponent,
    ItemhttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
