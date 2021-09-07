import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService } from '../../ShareService';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  classs: any;

  class = {
    id: null,
    name: null,
    level: null
  };

  constructor(private http: HttpClient, private shareService: ShareService) { }

  ngOnInit(): void {
    this.loadeClass();
  }

  loadeClass() {
    this.http.get(this.shareService.serverPath + '/class').subscribe((res: any) => {
      this.classs = res.class
      console.log(this.classs);
    })
  }

  saveClass() {
    if(this.class.id == null){
      var path = this.shareService.serverPath + '/class/save';
    }else{
      console.log(this.class);
      var path = this.shareService.serverPath + '/class/update';
    }

    this.http.post(path, this.class).subscribe((res: any) => {
      this.classs = res.class
      alert(res.message)
      this.class = {
        id: null,
        name: null,
        level: null
      };
      this.loadeClass();
      // console.log(this.students);
    });
  }

  editClass(item: any) {
    this.class = item
  }

  deleteClass(item: any) {

  }

}
