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
      case "Objective-C":
        return "rgb(67, 142, 255)";
        break;
      case "Swift":
        return "rgb(255, 172, 69)";
        break;
      case "Julia":
        return "rgb(162, 112, 186)";
        break;
      case "Elixir":
        return "rgb(110, 74, 126)";
        break;
      case "Crystal":
        return "rgb(0, 1, 0)";
        break;
      case "C#":
        return "rgb(23, 134, 0)";
        break;
      case "Scala":
        return "rgb(194, 45, 64)";
        break;
      case "Erlang":
        return "rgb(184, 57, 152)";
        break;
      case "Nim":
        return "rgb(55, 119, 91)";
        break;
      case "Haskell":
        return "rgb(94, 80, 134)";
        break;
      case "Red":
        return "rgb(245, 0, 0)";
        break;
      case "Frege":
        return "rgb(0, 202, 254)";
        break;
      case "Racket":
        return "rgb(60, 92, 170)";
        break;
      case "LiveScript":
        return "rgb(73, 152, 134)";
        break;
      case "D":
        return "rgb(186, 89, 94)";
        break;
      case "F#":
        return "rgb(184, 69, 252)";
        break;
      case "Perl 6":
        return "rgb(0, 0, 251)";
        break;
      case "Chapel":
        return "rgb(141, 198, 63)";
        break;
      case "Gosu":
        return "rgb(130, 147, 127)";
        break;
      case "Zig":
        return "rgb(236, 145, 92)";
        break;
      case "Haxe":
        return "rgb(223, 121, 0)";
        break;
      case "PowerShell":
        return "rgb(1, 36, 86)";
        break;
      case "ABAP":
        return "rgb(232, 39, 75)";
        break;
      case "Visual Basic":
        return "rgb(148, 93, 183)";
        break;
      case "Dockerfile":
        return "rgb(56, 77, 84)";
        break;
      case "TSQL":
        return "rgb(204, 204, 204)";
        break;
      case "Vim script":
        return "rgb(25, 159, 75)";
        break;
      case "Makefile":
        return "rgb(66, 120, 25)";
        break;
      case "Clojure":
        return "rgb(219, 88, 85)";
        break;
      case "Puppet":
        return "rgb(48, 43, 109)";
        break;
      case "ApacheConf":
        return "rgb(204, 204, 204)";
        break;
      case "ActionScript":
        return "rgb(136, 43, 15)";
        break;
      case "ASP":
        return "rgb(106, 64, 253)";
        break;
    }
  }

}
