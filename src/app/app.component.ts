import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Profile } from './github.api.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) { }

  public user$: Profile | Object = {};

  ngOnInit(): void {
    this.appService.getUsers().subscribe((user$: Profile) => {
      this.user$ = user$;
    });
  }

  public username: string;
}
