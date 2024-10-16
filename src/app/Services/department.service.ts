import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constant } from '../Constant/Constant';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MasterService } from './Master/master.service';
import { Department } from '../Model/Class/Customer';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  //apiURL:string='https://projectapi.gerasim.in/api/Complaint/';
  onRoleChanges$:Subject<string>=new Subject<string>;
  role$:BehaviorSubject<string>=new BehaviorSubject<string>("");

  constructor(private master:MasterService) { }
  getAllDepartment():Observable<Department[]>
  {
    debugger;
    //return this.http.get(this.apiURL+"GetParentDepartment");
    return this.master.get<Department[]>(constant.API_URL +constant.DEPARTMENT_METHODS.GET_PARENT_DEPT);
  }
  saveNewDept(obj : any)
  {
    return this.master.post(`${constant.API_URL}${constant.DEPARTMENT_METHODS.ADD_NEW_DEPT}`,obj);
  }
  addTwoNo(num1:number,num2:number)
  {
  return num1+num2;
  }
}
