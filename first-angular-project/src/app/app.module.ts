import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products.component';
import { ProductService } from './products.service';
import { HomeComponent } from './home.component';
import { TodoComponent } from './todo/todo.component';
import { TodoAppComponent } from './todo-app.component';
import { TodoService } from './service/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    TodoAppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [TodoAppComponent]
})
export class AppModule { }
