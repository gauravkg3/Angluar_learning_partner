import { JsonPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, JsonPipe,HttpClientModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css',
})
export class PostApiComponent implements OnInit {
  deptObj: any = {
    departmentId: 0,
    departmentName: '',
    departmentLogo: '',
  };
  deptList: any[] = [];
  http = inject(HttpClient);
  deptServ=inject(DepartmentService);
  constructor() {}
  ngOnInit(): void {
    this.getDepartment();
  }
  onSave() {
    debugger;
    this.http
      .post(
        'https://projectapi.gerasim.in/api/Complaint/AddNewDepartment',
        this.deptObj
      )
      .subscribe(
        (res: any) => {
          debugger;
          if (res.result) {
            debugger;
            alert('Entry created successfully!!');
            this.getDepartment();
          } else {
            debugger;
            alert(res.message);
          }
        },
        (error) => {
          debugger;
        }
      );
  }
  getDepartment() {
   this.deptServ.getAllDepartment().subscribe((result: any) => {
        debugger;
        this.deptList = result.data;
      });
  }
  // getAllDepartment() {
  //   this.http
  //     .get('https://projectapi.gerasim.in/api/Complaint/GetParentDepartment')
  //     .subscribe((result: any) => {
  //       debugger;
  //       this.deptList = result.data;
  //     });
  // }
  onEdit(data: any) {
    this.deptObj = data;
  }
  onUpdate() {
    this.http
      .post(
        'https://projectapi.gerasim.in/api/Complaint/UpdateDepartment',
        this.deptObj
      )
      .subscribe(
        (res: any) => {
          debugger;
          if (res.result) {
            debugger;
            alert('Department updated successfully!!');
          } else {
            debugger;
            alert(res.message);
          }
        },
        (error) => {
          debugger;
        }
      );
  }
  onDelete(departmentId: number) {
    const isDelete = confirm('Are you sure want to remove this?');
    debugger;
    if (isDelete) {
      this.http
        .delete(
          'https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=' +
            departmentId
        )
        .subscribe((res: any) => {
          debugger;
          if (res.result) {
            alert('Department Deleted successfully!!');
          }
          this.getDepartment();
        });
    }
  }
}
