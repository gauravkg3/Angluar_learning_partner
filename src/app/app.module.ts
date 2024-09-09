import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { CartComponent } from './cart/cart.component';
import { StructuralDirectivesComponent } from './directives/structural-directives/structural-directives.component';
import { AttributesDirectivesComponent } from './directives/attributes-directives/attributes-directives.component';
import { IfelseComponent } from './ControlFlow/ifelse/ifelse.component';
import { SwtichComponent } from './ControlFlow/swtich/swtich.component';
import { PostApiComponent } from './API_client/post-api/post-api.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [BrowserModule, BooksModule, AppRoutingModule, AuthModule,HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}