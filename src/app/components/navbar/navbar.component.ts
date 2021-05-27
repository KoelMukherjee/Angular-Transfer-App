import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showMobileLinksView = false;
  constructor() { }
    ngOnInit(): void {
  }

}
