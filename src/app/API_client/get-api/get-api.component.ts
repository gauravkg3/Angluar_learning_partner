import { JsonPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { error } from 'console';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [HttpClientModule,JsonPipe],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  userList:any[]=[];
  customerList:any[]=[];
  depServ=inject(DepartmentService);
constructor(private http:HttpClient)
{

}
getDepartment(){
  debugger;
  this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
    debugger;
    this.userList=result;
  })
}
getAllCustomer()
{
  debugger;
  this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers23").subscribe((result:any)=>{debugger;
  this.customerList=result.data},error=>{
    debugger;
    })
}
}
