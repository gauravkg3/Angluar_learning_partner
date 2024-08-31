import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './ifelse.component.html',
  styleUrls: ['./ifelse.component.css']
})
export class IfelseComponent implements OnInit {
  isDivVisible: boolean = true;
  isDiv2Visible: boolean = true;
  num1: string = '';
  num2: string = '';
  selectedState: string = '';
  cityArray: string[] = ['Pune', 'Mumbai', 'Nagpur', 'Thane'];
  studentList: any = [
    { studId: 21,totalMarks:88,gender:'Male',name: 'AAA', city: 'Pune', isActive: false },
    { studId: 22,totalMarks:33,gender:'Female',name: 'BBB', city: 'Mumbai', isActive: false },
    { studId: 23,totalMarks:63,gender:'Male',name: 'CC', city: 'Jalgao', isActive: true },
    { studId: 24,totalMarks:23,gender:'Female',name: 'DD', city: 'Mumbai', isActive: false },
    { studId: 25,totalMarks:92,gender:'Male',name: 'EE', city: 'Nagpur', isActive: false },
    { studId: 26,totalMarks:100,gender:'Male',name: 'FFF', city: 'Thane', isActive: true },
  ];
  customerStyle:any={
    'color':'white',
    'background-color':'red',
    'width':'200px',
    'height':'200px',
    'border-radius':'20px'
  };

  div1Bgcolor: string = '';
  isDiv2Active: boolean = true;
  isWarningDivVisiable:boolean=false;
  selectedStatus:string='';
  addRedClass() {
    this.div1Bgcolor = 'bg-danger';
  }
  addBlueClass() {
    this.div1Bgcolor = 'bg-primary';
  }
  isActive: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  showDiv1() {
    this.isDivVisible=true;
  }
  hideDiv1() {
    this.isDivVisible=false;
  }
  toggleDiv2() {
    this.isWarningDivVisiable=!this.isWarningDivVisiable;
  }
}
