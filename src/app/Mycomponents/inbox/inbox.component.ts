import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor() { 
    let date = new Date();
    console.log(String(date).substring(0,16))
    document.querySelector(".active")?.classList.remove("active");
    document.querySelector(".Inbox")?.classList.add("active")
  }

  ngOnInit(): void {
  }

}
