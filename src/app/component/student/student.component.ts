import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService } from '../../ShareService';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: any;

  student = {
    id: null,
    name: null,
    email: null,
    mobile: null,
    age: null,
    gender: null,
    address_info: null
  };

  constructor(private http: HttpClient, private shareService: ShareService) { }

  ngOnInit(): void {
    this.loade();
  }

  loade() {
    this.http.get(this.shareService.serverPath + '/student').subscribe((res: any) => {
      this.students = res.student
      // console.log(this.students);
    });
  }

  editStudent(item:any) {
    this.student = item
  }

  saveStudent() {
    this.http.post(this.shareService.serverPath + '/student/save', this.student).subscribe((res: any) => {
      this.students = res.student
      alert(res.message)
      this.loade();
      // console.log(this.students);
    });
  }

}
