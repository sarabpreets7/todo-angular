import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { Moment } from 'moment';
import * as moment from 'moment';
@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  todayTodos: Todo[] = [];
  currDate:string = moment(new Date()).format("MMM Do YY");
  constructor() { 

    let todos = localStorage.getItem("todos");
    let currDate = String(new Date());
    currDate = currDate.substring(0,15)
    if(todos !== null){
      this.todayTodos = JSON.parse(todos).filter(function(todo:Todo){
        return currDate == todo.date;
      })
    }
    document.querySelector(".active")?.classList.remove("active");
    document.querySelector(".Today")?.classList.add("active")
  }

  ngOnInit(): void {
  }

}
