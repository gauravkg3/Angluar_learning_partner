import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { StructuralDirectivesComponent } from './directives/structural-directives/structural-directives.component';
import { Attribute } from '@angular/compiler';
import { AttributesDirectivesComponent } from './directives/attributes-directives/attributes-directives.component';
import { IfelseComponent } from './ControlFlow/ifelse/ifelse.component';
import { SwtichComponent } from './ControlFlow/swtich/swtich.component';
import { PipeComponent } from './pipeC/pipe.component';
import { TemplateComponent } from './forms/template/template.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { GetApiComponent } from './API_client/get-api/get-api.component';
import { PostApiComponent } from './API_client/post-api/post-api.component';

const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'structural-directive', component: StructuralDirectivesComponent },
  { path: 'attribute-directive', component: AttributesDirectivesComponent },
  { path: 'ifelse-directive', component:IfelseComponent },
  { path: 'forswitch-directive', component:SwtichComponent },
  { path: 'pipe', component:PipeComponent},
  { path: 'form', component:TemplateComponent},
  { path: 'reactiveform', component:ReactiveComponent},
  { path: 'getapi', component:GetApiComponent},
  { path: 'postapi', component:PostApiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}