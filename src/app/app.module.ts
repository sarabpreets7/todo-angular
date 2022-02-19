import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './Mycomponents/todos/todos.component';
import { TodoItemComponent } from './Mycomponents/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { AddTodoComponent } from './Mycomponents/add-todo/add-todo.component';
import { HeaderComponent } from './Mycomponents/header/header.component';
import { SidebarComponent } from './Mycomponents/sidebar/sidebar.component';
import {MatIconModule} from '@angular/material/icon';
import * as $ from 'jquery';
import { InboxComponent } from './Mycomponents/inbox/inbox.component';
import { TodayComponent } from './Mycomponents/today/today.component';
import { StoreModule } from '@ngrx/store';
// import { todoReducer } from './store/reducers/todolist.reducer';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    HeaderComponent,
    SidebarComponent,
    InboxComponent,
    TodayComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    // StoreModule.forRoot({length :todoReducer }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
