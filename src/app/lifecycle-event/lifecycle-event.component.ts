import { Component,OnInit,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-event',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle-event.component.html',
  styleUrl: './lifecycle-event.component.css'
})
export class LifecycleEventComponent implements OnInit,OnChanges,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy{
  firstName:string='';
constructor()
{
  console.log("constructor");
  this.firstName="Gaurav";
}
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngOnInit(): void {
    console.log("ngOnInit");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");

  }
}
