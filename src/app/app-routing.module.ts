import { StudentComponent } from './component/student/student.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './component/class/class.component';
import { ClassroomComponent } from './component/classroom/classroom.component';

const routes: Routes = [
  { path: '', redirectTo: 'student', pathMatch: 'full' },
  { path: 'student', component: StudentComponent },
  { path: 'class', component: ClassComponent },
  { path: 'classroom', component: ClassroomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
