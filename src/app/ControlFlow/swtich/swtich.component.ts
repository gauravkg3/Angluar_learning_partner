import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-swtich',
  standalone:true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './swtich.component.html',
  styleUrls: ['./swtich.component.css']
})
export class SwtichComponent implements OnInit {
  
  cityArray:string []=['Pune','Mumbai','Nagpur','Thane'];
  studentList:any=[
    {studId:21,name:'AAA',city:'Pune',isActive:false },
    {studId:22,name:'BBB',city:'Mumbai',isActive:false },
    {studId:23,name:'CC',city:'Jalgao',isActive:true},
    {studId:24,name:'DD',city:'Mumbai',isActive:false },
    {studId:25,name:'EE',city:'Nagpur',isActive:false },
    {studId:26,name:'FFF',city:'Thane',isActive:true},
  ]
  dayNumber:string='';
  
  constructor() { }

  ngOnInit(): void {
  }
}
