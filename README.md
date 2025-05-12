# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.



*******************************************************************************************************************************
main.ts-->first file to exceute in angluar project


Data_binding
1.One way data Data binding
=>from .ts to .html
interpolation {{city}},property  binding [value]=5,[class]="myClassName"


=>from .html to .ts
event binding (click)="onSave()"

2.Two way data binding
=>using ngModel [(ngModel)]="selectedState"
	FormsModule needs to be imported

3. Using Signal(angular 17 onwards)-->signal is kind of state
firstName=signal("Gaurav");
changeCourseName(){
	this.firstName.set("Gupta");
}
<h2>{{firstName()}}</h2>

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
  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   addNewCity(){
    this.cityList.set([...this.cityList(),"Gurguram"])
  }
  changeStudentCity(){
    this.studentObj.set({...this.studentObj(),city:"Pakuria"})
  }
  
  
*******************************************
1)Structural Directive:DOM element ka structural  change karega hide/show
	*ngIf-to add to remove element from DOM=>it can be true or false value We can pass value either from variable,comparision,function
	*ngFor-to Create dynamic Element=>We need to pass array=>We can pass value either from variable,function
	cityArray:string[]=['pune','Mumbai'];
	<ul>
	<li *ngFor="let city of cityArray">{{city}}</li>
	</ul>
	
	*ngSwitch-switch case to dyanmic Element
	<div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You choose Red Color</div>
    <div *ngSwitchCase="'blue'">You choose blue Color</div>
    <div *ngSwitchDefault>Try Again!!</div>
	</div>
	
2)Attribute Directive:it can only change property of DOM not structure
[ngClass]
[ngStyle]="{background-color':stud.isActive?'yellow':'Red'}"
 <div class="progress-bar" role="progressbar" [ngStyle]="{'width': stud.totalMarks}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{stud.totalMarks}}%</div>

CommonModule needs to be imported to use directive
=================================================
[(ngModel)]='nums1'-->FormsModule
[ngClass]="div1BgColor==true?'bg-primary':'bg-warning'"-->CommonModule<-*ngIf,*ngFor,*ngSwitch

imports:[RouterOutlet,RouterLink]
<router-outlet></router-outlet>-->it is directive which is responsible to render activated route component
<a class="mx-4" routerLink="/ifelse-directive">Ifelse</a>


how to redirect from one Component to Other Component
	1)from .ts-->via function 
		i)(click)="navigateToAttribute()"
		ii)constructor(private router:Router){}
		iii)navigateToAttribute(){this.router.navigateByUrl("attributedirective")
	
	
	
	2)from .html--->routerLink="/ifelse-directive or [routerLink]=['/structural-dir']"

+++++++++++++++++++++++++++++++++++++++++
Control Flow:-
i)@for (item of cityArray; track $index) 
            {
                 <li>{{item}}</li>
            }
ii)@switch (dayNumber) {
            @case ('1') {
                <span>Monday</span>
            }
			
			@default {
                <Span>Wrong Entry</Span>
				}
iii) @if(div1Visible)
	{
		<div></div>
	}
	@else{
	<div></div>
	}
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
{{items |upperCase }}-->imports:[upperCasepipe],before angluar 17 pipe was globablly availble but now we have to import it in .ts file
            currentDate:Date=new Date();
			{{currentDate}}->Mon Sep 02 2024 08:09:02 GMT+0530 (India Standard Time)
			{{currentDate |date}}->Sep 2, 2024
			{{currentDate |date:'dd-MM-yy}}->02-09-24
			dd-MMM-yy->02-SEP-24
			
		*********************
		Async Pipe
		currentTime:Observable<Date>=new Observable<Date>;
		constructor(){
		this.currentTime=interval(1000).pipe(map(()=>new Date()));
		}
		{{currentTime |async}}
		
		
		Custom pipe main transform function hota hai
-----------Template Form------
steps:
create an object where we have all fields
bind properties to all input element by ngModel
on click submit we get form obejct 

  imports: [FormsModule],
  
   studentObj:any={
    firstName:'',
    lastName:'',
    userName:'',
    city:'',
    state:'',
    zipCode:'',
    isAcceptTerms:false
  }
 #form="ngForm"-->for validation of form in submit
 <button class="btn btn-primary" [disabled]="form.invalid" type="submit" (click)="onSubmit()">Submit form</button>

 name='firstName' [(ngModel)]="studentObj.firstName,input element agar form tag ke andar ho toh name attribute complusary ho jata hai
 
 for validation sms we need to implement # property #fName="ngModel"
 <input type="text" class="form-control" id="validationCustom01" #fName="ngModel"  required minlength="3" name='firstName' [(ngModel)]="studentObj.firstName">
      <div class="text-danger">
       @if ((fName.touched || fName.dirty) && fName.errors?.['required']) {
            <span>This is required!!</span>
        }
        @else if ((fName.touched || fName.dirty)  && fName.errors?.['minlength']) {
            <span>Minimum three length is required!!</span>
            }
--------Reactive Form--------
imports: [ReactiveFormsModule,JsonPipe],


studentForm:FormGroup=new FormGroup({
firstName:new FormControl("",[Validators.required,Validators.minLength(4)]),
lastName:new FormControl(""),
userName:new FormControl('some@123',[Validators.email]),
city:new FormControl(""),
state:new FormControl(""),
zipCode:new FormControl(""),
isAcceptTerms:new FormControl("")
  });
  
[formGroup]="studentForm" 
formControlName="zipCode"
  
    @if (studentForm.controls['userName'].touched && studentForm.controls['userName'].errors?.['email']) {
       <span>Please Enter Vaild email!!</span>
     }
  
onSave()
  {
    this.formValue=this.studentForm.value;
  }
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Get_API 
 
  https://projectapi.gerasim.in/index.html
  https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers
  https://jsonplaceholder.typicode.com/users
  https://github.com/voidChetan/angular_18_tutorial/blob/main/src/app/components/layout/layout.component.html
  
  imports: [HttpClientModule]--> for API call
  above Angluar 17: in app.config.ts inside providers array add provideHttpclient()
    providers: [ provideHttpClient(),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]

  
  Creating object of HttpClient:
  by dependency injection,
	constructor(private http:HttpClient)
	{
	} 
  or by injection,
  http=inject(HttpClient);
  ng s  --port 4209  
  getAllCustomer()
{
  debugger;
  this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((result:any)=>{debugger;
  this.customerList=result.data},error=>{
    debugger;
  })
}

for post API:-

 deptObj:any={
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  }
   binds your form by ngModel or reactive form

 onSave()
  {
    debugger;
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.deptObj).subscribe((res:any)=>{
      debugger;
      if(res.result){
        debugger;
        alert("Entry created successfully!!");
      }
      else{
        debugger;
        alert(res.message);
      }
    },
    error=>{
      debugger;
      })
    }
for delete:
  onDelete(departmentId: number) {
    const isDelete = confirm('Are you sure want to remove this?');
    debugger;
    if (isDelete) {
      this.http
        .delete(
          'https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=' +
            departmentId
        )
        .subscribe((res: any) => {
          debugger;
          if (res.result) {
            alert('Department Deleted successfully!!');
          }
          this.getAllDepartment();
        });
    }
======================================
onInit()-->an event which get automatically called

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Services=it like a file where we store reusable code,mostly for API call

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  apiURL:string='https://projectapi.gerasim.in/api/Complaint/';

  constructor(private http:HttpClient) { }
  getAllDepartment()
  {
    debugger;
    return this.http.get(this.apiURL+"GetParentDepartment"); //with help of concatenation 
  }
  saveNewDept(obj : any)
  {
    return this.http.post(`${this.apiURL}AddNewDepartment`,
        obj);  //with the help of template literals ES6
  }
}

in ts file
deptServ=inject(DepartmentService);

getDepartment() {
   this.deptServ.getAllDepartment().subscribe((result: any) => {
        debugger;
        this.deptList = result.data;
      });
  }
-----------Input-Output-------
parnet to child main data share karna hai toh @Input() use karnge

export class AlertComponent {
 @Input() meessage:string='';
 @Input() alertType:string='';
}
 <div class="alert " [ngClass]="{'alert-success':alertType=='Success','alert-warning':alertType=='Warning' ,'alert-danger':alertType=='Error'}" role="alert">
    <Strong>{{alertType}}!!</Strong>{{meessage}}
   </div>
 <app-alert [alertType]="'Success'" [meessage]="'Gaurav welcomes you to POST API!!'"></app-alert>


child to parent main data share karne ke liye @Output

@Output() onnBtnClick=new EventEmitter<any>();
onClick()
{
  debugger;
this.onnBtnClick.emit();
}
<app-my-button (onnBtnClick)="onDelete(item.departmentId)" [btnClass]="'btn btn-danger'" [btnText]="'Delete'"></app-my-button>
=========================Life Cycle Event==================
can we use constructor for API call? Ans :No we ideally use ngonit lifecycle event for API calling


<div  class="p-3 text-center bg-primary" *ngIf="isLoggedIn; else notLogged" >
            <h3>Div-1</h3>
            <p>
                {{loggerUserName}}
            </p>
        </div>
        <ng-template #notLogged>
            <div  class="p-3 text-center bg-danger" >
            <h3>Div-1</h3>
           <span>
            User Not Logged In.
           </span>
        </div>
		
		----------------View -child----------
	<div class="col-4">
      <ng-template #dynamicTem>
         <p>Hi From Dynamic Template</p>
      </ng-template>
    </div>
    <div class="col-4">
        <div #dynamicContainer>

        </div>
    </div>
	
	====
	 @ViewChild('dynamicTem') dynamicTemplate: TemplateRef<any> | undefined;
	 @ViewChild('dynamicContainer', { read: ViewContainerRef }) dynaContainer: ViewContainerRef | undefined;

	loadTemplate() {
    if (this.dynamicTemplate) {
      this.dynaContainer?.createEmbeddedView(this.dynamicTemplate);
    }
  }
  
  
  ** Ek element main structurtural directive use kar sakte hai <h *ngIf='' *ngFor='let user of userList'> wrong X, ng-template,ng-container acts like imaginary div 
  
   <ng-container *ngTemplateOutlet="myTemp">

   </ng-container>
   
   <ng-template #myTemp>
    <p>Hi from Template!!</p>
   </ng-template>
   
   
   **
   @ViewChild('txt') textBox?:ElementRef;
   @ViewChild(AlertComponent)  alertComp?:AlertComponent; agar component ko access karna hai toh # property dene ka jartorat nhi hai direct class ka naam dena hai
   data type same hoga as component name
   
   const alertMode=this.alertComp?.alertMode;--> using variable of child class 
   
   
  ==================================================
  Guard
  
  
  ---------------------------------------------------
  When to use class or interface?
  
  creating variable to bind form-classes
  creating a variable to hold array-interface
  
  ===============================
    onRoleChanges$:Subject<string>=new Subject<string>;
	role$:BehaviorSubject<string>=new BehaviorSubject<string>("");
	***
	BehaviorSubject keeps in memory the last value that was emitted by the observable. A regular Subject doesn't.

we can subscribe subject in these constructor,ngonit,ngAfterviewonit

onRoleChanges(role:string)
{
  debugger;
this.deptServ.onRoleChanges$.next(role)
this.deptServ.role$.next(role)
}

  constructor(private deptServ: DepartmentService) {
    this.currentTime = interval(1000).pipe(map(() => new Date()));
    this.deptServ.onRoleChanges$.subscribe((role: string) => {
      debugger;
      this.currentRole = role;
    }) 
  }
  =========================
  changeDetction:ChangedetectionStrategy.OnPush
  What is change Detection Strategy?
  what is zone.js?
  Change Detecction Cycle?
  KeyValueDiffers & IterableDiffers
  Manual Change Detection-->
  default
  OnPush=to stop change detection

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
