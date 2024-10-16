import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DepartmentService } from '../Services/department.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLink,FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  selectedRole:string="";
  router=inject(Router);
  loggedUserData:any;
  constructor(private deptServ:DepartmentService)
  {
    const loggedData=localStorage.getItem("LoginUser");
    if(loggedData!=null)
    {
      this.loggedUserData=JSON.parse(loggedData); //.parse is used to convert string into Object
    }
  }
logoff()
{
  localStorage.removeItem('LoginUser')
  this.router.navigateByUrl('login');

}
onRoleChanges(role:string)
{
  debugger;
this.deptServ.onRoleChanges$.next(role)
this.deptServ.role$.next(role)
}
}
