import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  menu(){
    console.log("hello");
    var addclasss = document.getElementById('menu');
    addclasss.className = 'menutwo';
  }
  menuremove(){
    console.log("hello");
    var addclasss = document.getElementById('menu');
    addclasss.classList.remove('menutwo');

  }


  

}
