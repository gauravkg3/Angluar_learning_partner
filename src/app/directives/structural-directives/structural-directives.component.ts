import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-structural-directives',
  standalone:true,
  imports:[CommonModule,FormsModule,RouterLink],
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {
navigateToattributes() {
this.router.navigateByUrl("/attribute-directive");
}
  isDivVisible:boolean=false;
  isDiv2Visible:boolean=true;
  num1:string='';
  num2:string='';
  selectedState:string='';
  cityArray:string []=['Pune','Mumbai','Nagpur','Thane'];
studentList:any=[
  {studId:21,name:'AAA',city:'Pune',isActive:false },
  {studId:22,name:'BBB',city:'Mumbai',isActive:false },
  {studId:23,name:'CC',city:'Jalgao',isActive:true},
  {studId:24,name:'DD',city:'Mumbai',isActive:false },
  {studId:25,name:'EE',city:'Nagpur',isActive:false },
  {studId:26,name:'FFF',city:'Thane',isActive:true},
]

  
  isActive:boolean=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  showDiv1(){
    this.isDivVisible=true;
  }
  hideDiv1(){
    this.isDivVisible=false;
  }
  toggleDiv2()
  {
   this.isDiv2Visible=!this.isDiv2Visible;

    // if (this.isDiv2Visible==true) {
    //   this.isDiv2Visible=false;
    //   } else {
    //     this.isDiv2Visible=true;
    // }
  }
}
