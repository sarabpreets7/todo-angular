import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter();

  
  title!:string;
  desc!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("submit clicked")
    let inputFields = (document.querySelectorAll(".form-label"));
    let todos = localStorage.getItem("todos");
    let length;
    if(todos !== null){
      length = JSON.parse(todos).length;
    }
    else{
      length =0;
    }
    
   let obj ={
      "sno":length+1,
      "title":this.title,
      "desc":this.desc,
      "active":true,
      "date": String(new Date())
    }
    this.todoAdd.emit(obj);
    this.title="";
    this.desc="";
  }

}
