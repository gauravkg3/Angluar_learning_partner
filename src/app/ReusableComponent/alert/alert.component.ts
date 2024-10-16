import { CommonModule} from '@angular/common';
import { Component, Input,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnChanges{

 ngOnChanges(changes: SimpleChanges): void {
  debugger;
    console.log("ngOnChanges");
 }
 @Input() message:string='';
 @Input() alertType:string='';
 alertMode:string ="Demo Deemo";

}
