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

  classroom = {
    id: null,
    class_id : null,
    student_id : null,
  };

  constructor(private http: HttpClient, private shareService: ShareService) { }

  ngOnInit(): void {
    this.loadeClass();
    this.loadeStudent();
  }

  loadeClass() {
    this.http.get(this.shareService.serverPath + '/class').subscribe((res: any) => {
      this.classs = res.class
      //console.log(this.classs);
    })
  }

  loadeStudent() {
    this.http.get(this.shareService.serverPath + '/student').subscribe((res: any) => {
      this.students = res.student
      // console.log(this.students);
    });
  }

  saveClassroom() {
    console.log(this.classroom);
  }
}
