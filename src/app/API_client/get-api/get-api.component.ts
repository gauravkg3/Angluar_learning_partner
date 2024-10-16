import { JsonPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { error } from 'console';
import { Customer } from 'src/app/Model/Class/Customer';
import { IUser } from 'src/app/Model/Interface/IUser';
import { AlertComponent } from 'src/app/ReusableComponent/alert/alert.component';
import { MyButtonComponent } from 'src/app/ReusableComponent/my-button/my-button.component';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [HttpClientModule,JsonPipe,AlertComponent,MyButtonComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  userList:IUser[]=[];
  customerList:Customer[]=[];
  alertMsg:string='';
  depServ=inject(DepartmentService);
constructor(private http:HttpClient)
{

}
getAllUser(){
  debugger;
  this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
    debugger;
    this.userList=result;
  })
}
getAllCustomer()
{
  debugger;
  this.http.get("https://projectapi.gerasim.in/api/PropertyBookingController/GetAllCustomer").subscribe((result:any)=>{debugger;
  this.customerList=result.data},error=>{
    debugger;
    })
}
getData(data:any)
{
debugger;
}
changeMSG()
{
  this.alertMsg="Changes viangOnChanges";
}
}
