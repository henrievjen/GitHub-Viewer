import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  public setThemeState(position: number): void {
    const themes = document.getElementsByClassName('themes')[0].children;

    for (let i = 0; i < themes.length; i++) {
      themes[i].classList.remove('selected-theme');
    }

    (<HTMLElement> themes[position]).classList.add('selected-theme');
  }

}
