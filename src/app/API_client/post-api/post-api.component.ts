import { JsonPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from 'src/app/Services/department.service';
import { AlertComponent } from "../../ReusableComponent/alert/alert.component";
import { MyButtonComponent } from 'src/app/ReusableComponent/my-button/my-button.component';
import { Department, IDepartmentList } from 'src/app/Model/Class/Customer';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, JsonPipe, HttpClientModule, AlertComponent,MyButtonComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css',
  //changeDetection:ChangeDetectionStrategy.OnPush
})
export class PostApiComponent implements OnInit {
// reloadUI() {
// }
  // deptObj: any = {
  //   departmentId: 0,
  //   departmentName: '',
  //   departmentLogo: '',
  // };
  deptObj:Department=new Department();
  //deptList: any[] = [];
  deptList: IDepartmentList[] = [];
  http = inject(HttpClient);
  deptServ=inject(DepartmentService);
  name:string="HTML";
  userList=signal<any[]>([])
  constructor(private cdRef:ChangeDetectorRef) { 
    const result=this.deptServ.addTwoNo(26,39)
    console.log(result);
    
  }
  ngOnInit(): void {
    this.getDepartment();
  }
  onSave() {
    debugger;
    this.deptServ.saveNewDept(this.deptObj).subscribe(
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
  // onSave() {
  //   debugger;
  //   this.http
  //     .post(
  //       'https://projectapi.gerasim.in/api/Complaint/AddNewDepartment',
  //       this.deptObj
  //     )
  //     .subscribe(
  //       (res: any) => {
  //         debugger;
  //         if (res.result) {
  //           debugger;
  //           alert('Entry created successfully!!');
  //           this.getDepartment();
  //         } else {
  //           debugger;
  //           alert(res.message);
  //         }
  //       },
  //       (error) => {
  //         debugger;
  //       }
  //     );
  // }
  getDepartment() {
   this.deptServ.getAllDepartment().subscribe((result: any) => {
        debugger;
        //this.deptList = result.data;
        this.userList.set(result.data);

        this.name="JAVA";
        // setTimeout(() => {
        //   this.cdRef.detectChanges()
        // }, 5000);
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

    this.deptObj=new Department(); //if you want to reintialize your obj 
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
    debugger;
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
