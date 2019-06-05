import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('profile-navbar').classList.add("active");
    document.getElementById('home-navbar').classList.remove("active");
    document.getElementById('repositories-navbar').classList.remove("active");
  }

}
