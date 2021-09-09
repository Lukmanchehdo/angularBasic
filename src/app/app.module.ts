import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from "angular-datatables";

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShareService } from './ShareService';

import { StudentComponent } from './component/student/student.component';
import { ClassComponent } from './component/class/class.component';
import { ClassroomComponent } from './component/classroom/classroom.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ClassComponent,
    ClassroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
