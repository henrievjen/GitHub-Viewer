import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
    document.getElementById('repositories-navbar').classList.add("active");
    document.getElementById('home-navbar').classList.remove("active");
    document.getElementById('profile-navbar').classList.remove("active");

    if (sessionStorage.getItem('username') !== null) {
      this.appService.getRepos(sessionStorage.getItem('username')).subscribe((repos$) => {
        this.appService.repos$ = repos$;
      });
    }
  }

  getLanguageColor(language: string): string {
    switch(language) {
      case "HTML":
        return "rgb(227, 76, 38)";
        break;
      case "JavaScript":
        return "rgb(241, 224, 90)";
        break;
      case "TypeScript":
        return "rgb(43, 116, 137)";
        break;
      case "CoffeeScript":
        return "rgb(36, 71, 118)";
        break;
      case "Python":
        return "rgb(53, 114, 165)";
        break;
      case "Jupyter Notebook":
        return "rgb(218, 91, 11)";
        break;
      case "Kotlin":
        return "rgb(241, 142, 51)";
        break;
      case "PHP":
        return "rgb(79, 93, 149)";
        break;
      case "Shell":
        return "rgb(137, 224, 81)";
        break;
      case "Roff":
        return "rgb(236, 222, 190)";
        break;
      case "Rust":
        return "rgb(222, 165, 132)";
        break;
      case "Java":
        return "rgb(176, 114, 25)";
        break;
      case "Go":
        return "rgb(0, 173, 216)";
        break;
      case "C++":
        return "rgb(243, 75, 125)";
        break;
      case "C":
        return "rgb(85, 85, 85)";
        break;
      case "CSS":
        return "rgb(86, 61, 124)";
        break;
      case "Vue":
        return "rgb(44, 62, 80)";
        break;
      case "Assembly":
        return "rgb(110, 76, 19)";
        break;
      case "R":
        return "rgb(25, 140, 231)";
        break;
      case "TeX":
        return "rgb(61, 97, 23)";
        break;
      case "PLpgSQL":
        return "rgb(204, 204, 204)";
        break;
      case "Ruby":
        return "rgb(112, 21, 22)";
        break;
    }
  }

}
