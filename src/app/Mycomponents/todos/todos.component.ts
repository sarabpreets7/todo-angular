import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  

  todos: Todo[] = [];
  constructor() { 

    let localitem = localStorage.getItem("todos");
    if(localitem!==null){
      
        this.todos =JSON.parse(localitem);

    }


  }

  // [
  //   { "sno":1,
  //   'title': 'Python',
  //   'desc': 'Easy Language',
  //   'active': true},
  //   { "sno":2,
  //   'title': 'Java',
  //   'desc': 'Moderate Language',
  //   'active': true},
  //   { "sno":3,
  //   'title': 'Angular',
  //   'desc': 'Hard Language',
  //   'active': true
  // }
  // ]

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    console.log(todo);
    let index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }

  addToDo(todo:Todo){
    console.log(todo)
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  toggleTodo(todo:Todo){
    let index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }

  

}
