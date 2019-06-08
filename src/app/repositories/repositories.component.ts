import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('repositories-navbar').classList.add("active");
    document.getElementById('home-navbar').classList.remove("active");
    document.getElementById('profile-navbar').classList.remove("active");
  }

}
