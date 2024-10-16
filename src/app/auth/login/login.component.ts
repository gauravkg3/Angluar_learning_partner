import { Component, inject, Inject, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/Auth';
import { AuthService } from '../auth.service';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userObj: any = {
    email: '',
    password: '',
  };
  // form: LoginForm = {
  //   email: '',
  //   password: '',
  //   // confirm_password: ''
  // };

  // constructor(private authService: AuthService) {}

  // ngOnInit(): void {}

  // submit() {
  //   this.authService.login(this.form);
  // }

  // isLoading() {
  //   return this.authService.isLoading;
  // }
router=inject(Router);
http=inject(HttpClient);
  onLogin()
  {
    debugger;
    // if(this.userObj.userName=="admin" && this.userObj.passWord =="1234"){
    //   alert("Login Successfully!!!");
    //   localStorage.setItem('LoginUser',this.userObj.userName)
    // this.router.navigateByUrl("form")
    // }else{
    //   alert('Wrong Credentials!!')
    // }
    this.http.post("https://projectapi.gerasim.in/api/EmployeeLeaveApp/login",this.userObj).subscribe((res:any)=>{
      if(res.result){
        alert("Login Successfully!!!");
      localStorage.setItem('LoginUser',JSON.stringify(res.data));//.stringify  is used to convert JSON into string
      this.router.navigateByUrl("form")
      }
      else{
          alert(res.message)
        }
      })
  }
}