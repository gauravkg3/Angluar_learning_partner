import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { resourceLimits } from 'worker_threads';

@Component({
  selector: 'app-ngcontainer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngcontainer.component.html',
  styleUrl: './ngcontainer.component.css'
})
export class NgcontainerComponent {
  isContainer:boolean=true;
  http = inject(HttpClient);
  isApi:boolean=false;
  userList:any[]=[];
  getUser()
  {
  this.isApi=true;
  this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
     this.userList=result;
     this.isApi=false;
  })
 
  }

}
