import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  //changeDetection:ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
  firstName = signal('Gaurav');
  lastName = signal('Kumar');
  fullName=computed(()=>this.firstName()+" "+this.lastName());

  rollNumber = signal<number>(123);
  cityList=signal(["Pune","Mumbai"]);
  courseName:string="Java";
  studentObj=signal({
    name:"John",
    city:"Dumka"
  })
  constructor() {
    const fName = this.firstName();
    setTimeout(()=>{
      this.firstName.set("Dot-Net");
      this.courseName="HTML"
    },5000)
  }
  changeName() {
    this.firstName.set('Sachin');
  }
  changeLastName()
  {
    this.lastName.set("Tendulkar");
  }
  addNewCity(){
    this.cityList.set([...this.cityList(),"Gurguram"])
  }
  changeStudentCity(){
    this.studentObj.set({...this.studentObj(),city:"Pakuria"})
  }
}
