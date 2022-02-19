import { Component, OnInit } from '@angular/core';
// import { TodoState } from 'src/app/store/reducers/todolist.reducer';
// import { Store } from '@ngrx/store';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
    todosLength!: number;
    // length$ = this.store.select('length')

  constructor() {
  //   document.querySelector("#sidebarCollapse")?.addEventListener("click",function(){
  //     document.querySelector("#sidebar").toggleClass('active')
  //   })
  let todos = localStorage.getItem("todos");
  if(todos!== null){
    this.todosLength = JSON.parse(todos).length
  }
  else{
    this.todosLength = 0;
  }
   

  //   $('#sidebarCollapse').on('click', function () {
  //     $('#sidebar').toggleClass('active');
  // });


   }

  ngOnInit(): void {
  }

  handleSelection(){
    console.log(document.querySelector(".active"))
  }
  onClick(){
    let sidebar = document.querySelector(".sidebar");
    if(sidebar?.classList.contains("active")){
      sidebar?.classList.remove("active")
    }
    else{
      sidebar?.classList.add("active")
    }
  }

}
