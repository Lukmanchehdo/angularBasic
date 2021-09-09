import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService } from '../../ShareService';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  students: any;

  age!: number;
  email!: string;

  user = {
    age: null,
    email: null,
  }

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
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
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
    if(this.student.id == null){
      var path = this.shareService.serverPath + '/student/save';
    }else{
      var path = this.shareService.serverPath + '/student/update';
    }

    this.http.post(path, this.student).subscribe((res: any) => {
      this.students = res.student
      alert(res.message)
      this.student = {
        id: null,
        name: null,
        email: null,
        mobile: null,
        age: null,
        gender: null,
        address_info: null
      };
      this.loade();
      // console.log(this.students);
    });
  }

  deleteStudent(item:any) {
    if(confirm("Are you sure to delete ")) {
    this.http.post(this.shareService.serverPath + '/student/delete', item).subscribe((res: any) => {
      this.students = res.student
      alert(res.message)
      this.loade();
      // console.log(this.students);
    });
  }
  }

  loginTest() {
    this.http.get(this.shareService.serverPath + '/student').subscribe((res: any) => {
      this.students = res.student

      // const obj = Object.assign({}, res.student);
      // console.log(obj);
      // this.age = obj.age;
      // this.email = obj.email;

      //console.log(this.email);

      if("1234" == this.user.age && "Admin" == this.user.email) {
        console.log("มีบัญชีผู้ใช้");
      }
      // console.log(this.students);
    });
    //console.log(this.user);
  }

}
