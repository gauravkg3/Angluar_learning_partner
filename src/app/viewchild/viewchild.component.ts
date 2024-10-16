import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AlertComponent } from '../ReusableComponent/alert/alert.component';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent implements AfterViewInit{
  @ViewChild('txt') textBox?:ElementRef;
  @ViewChild(AlertComponent)  alertComp?:AlertComponent;

ngAfterViewInit(): void {
const value=this.textBox?.nativeElement.value;
debugger;
const alertMode=this.alertComp?.alertMode;
}
}
