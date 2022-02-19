import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo!: Todo;

  @Output() todoCheckBox : EventEmitter<Todo> = new EventEmitter();

  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();

  elapsedTime:string ="";
  constructor() { 

    
  }

  ngOnInit(): void {
    let date = moment(this.todo.date)
    let today = moment().startOf('day');
    console.log(today,date)
    let Time = (Math.round(moment.duration(<any>today - <any>date).asDays()));
    if(Time === 0){
      this.elapsedTime = "today"
    }
    else if(Time ===1){
      this.elapsedTime = "yesterday"
    }
    else{
      this.elapsedTime = String(Time)+" days ago"
    }
  }
  onCheckboxClick(todo:Todo){
    this.todoCheckBox.emit(todo);
  }

  onClick(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("event fired")
  }

 

}
