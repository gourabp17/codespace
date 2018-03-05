import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatToolbarModule,
  MatFormFieldModule, MatInputModule, MatSnackBarModule, MatTableModule
} from '@angular/material';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AwsHomeComponent } from './aws/home/home.component';
import { Su4dzQgr1yComponent } from './aws/su4dz-qgr1y/su4dz-qgr1y.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AwsHomeComponent,
    Su4dzQgr1yComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule,
    MatToolbarModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatTableModule,
    AppRoutingModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
