import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService } from '../../ShareService';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {

  classs: any;
  students: any;
  classrooms: any;

  classroom = {
    id: null,
    class_id : null,
    student_id : null,
  };

  constructor(private http: HttpClient, private shareService: ShareService) { }

  ngOnInit(): void {
    this.loadeClass();
    this.loadeStudent();

    this.loadeClassroom();
  }

  loadeClass() {
    this.http.get(this.shareService.serverPath + '/class').subscribe((res: any) => {
      this.classs = res.class
      //console.log(this.classs);
    })
  }

  loadeStudent() {
    this.http.get(this.shareService.serverPath + '/studentClassroom').subscribe((res: any) => {
      this.students = res.student
      // console.log(this.students);
    });
  }

  saveClassroom() {
    //console.log(this.classroom);
    this.http.post(this.shareService.serverPath + '/classroom/save', this.classroom).subscribe((res: any) => {
      this.classrooms = res;
      alert(res.message);
      this.classroom = {
        id: null,
        class_id : null,
        student_id : null,
      };
      //this.refresh();

      this.loadeClassroom();
      this.loadeStudent();
    });
  }

  loadeClassroom() {
    this.http.get(this.shareService.serverPath + '/classroom').subscribe((res: any) => {
      this.classrooms = res

      //console.log(this.classrooms);
    });

  }

  deleteStudent(student:any) {
    if(confirm("Are you sure to delete ")) {
      this.http.delete(this.shareService.serverPath + '/classroom/delete/' + student.id).subscribe((res: any) =>{
        this.classrooms = res
        alert(res.message);
        this.loadeClassroom();
      })
    }
  }

  refresh(): void {
    window.location.reload();
  }
}
