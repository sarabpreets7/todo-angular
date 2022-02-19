import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  handleAnchor(){
    document.querySelector("#form")?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
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
