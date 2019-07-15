import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    sessionStorage.clear();
    document.getElementById('home-navbar').classList.remove('active');
    document.getElementById('profile-navbar').classList.remove('active');
    document.getElementById('repositories-navbar').classList.remove('active');
  }

}
