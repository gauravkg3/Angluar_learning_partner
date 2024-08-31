import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../Pipes/na.pipe';
import { state } from '@angular/animations';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [DatePipe,UpperCasePipe,LowerCasePipe,TitleCasePipe,JsonPipe,AsyncPipe,NaPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
firstName:string="This is a demo session";
currentDate:Date=new Date();
currentTime:Observable<Date> =new Observable<Date>;
student:any={
  name :'Gaurav',
  city:'pune',
  empId:323,
  state:'hh'
};

constructor()
{
  this.currentTime=interval(1000).pipe(map(()=>new Date()));
}
}
