import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Profile } from '../github.api.interface';
import { Repos } from '../github.api.repos.interface';

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
      this.appService.getUsers(sessionStorage.getItem('username')).subscribe((user$: Profile) => {
        this.appService.user$ = user$;
      });
      
      this.appService.getRepos(sessionStorage.getItem('username')).subscribe((repos$: Repos) => {
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
      case "Perl":
        return "rgb(2, 152, 195)";
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
      case "SQLPL":
        return "rgb(204, 204, 204)";
        break;
      case "CMake":
        return "rgb(204, 204, 204)";
        break;
      case "Matlab":
        return "rgb(225, 103, 55)";
        break;
      case "Cuda":
        return "rgb(58, 78, 58)";
        break;
      case "OpenEdge ABL":
        return "rgb(204, 204, 204)";
        break;
      case "Mercury":
        return "rgb(255, 43, 43)";
        break;
      case "PureBasic":
        return "rgb(90, 105, 134)";
        break;
      case "Self":
        return "rgb(5, 121, 170)";
        break;
      case "edn":
        return "rgb(219, 88, 85)";
        break;
      case "Rebol":
        return "rgb(53, 138, 91)";
        break;
      case "Dart":
        return "rgb(0, 180, 171)";
        break;
      case "AspectJ":
        return "rgb(169, 87, 176)";
        break;
      case "Web Ontology Language":
        return "rgb(156, 201, 221)";
        break;
      case "xBase":
        return "rgb(64, 58, 64)";
        break;
      case "Eiffel":
        return "rgb(148, 109, 87)";
        break;
      case "Nix":
        return "rgb(126, 126, 255)";
        break;
      case "RAML":
        return "rgb(119, 217, 251)";
        break;
      case "MTML":
        return "rgb(183, 225, 244)";
        break;
      case "SAS":
        return "rgb(179, 73, 54)";
        break;
      case "Agda":
        return "rgb(49, 86, 101)";
        break;
      case "wisp":
        return "rgb(117, 130, 209)";
        break;
      case "Opal":
        return "rgb(247, 237, 224)";
        break;
      case "ColdFusion CFC":
        return "rgb(237, 44, 214)";
        break;
      case "Oz":
        return "rgb(250, 183, 56)";
        break;
      case "Mirah":
        return "rgb(199, 169, 56)";
        break;
      case "Objective-J":
        return "rgb(255, 12, 90)";
        break;
      case "FreeMarker":
        return "rgb(0, 80, 178)";
        break;
      case "Component Pascal":
        return "rgb(176, 206, 78)";
        break;
      case "Arc":
        return "rgb(170, 42, 254)";
        break;
      case "Brainfuck":
        return "rgb(47, 37, 48)";
        break;
      case "Nit":
        return "rgb(0, 153, 23)";
        break;
      case "APL":
        return "rgb(90, 129, 100)";
        break;
      case "Cirru":
        return "rgb(204, 204, 255)";
        break;
      case "SQF":
        return "rgb(63, 63, 63)";
        break;
      case "Glyph":
        return "rgb(228, 204, 152)";
        break;
      case "MAXScript":
        return "rgb(0, 166, 166)";
        break;
      case "ColdFusion":
        return "rgb(237, 44, 214)";
        break;
      case "Lua":
        return "rgb(0, 0, 128)";
        break;
      case "Verilog":
        return "rgb(178, 183, 248)";
        break;
      case "Factor":
        return "rgb(99, 103, 70)";
        break;
      case "Pure Data":
        return "rgb(145, 222, 121)";
        break;
      case "Forth":
        return "rgb(52, 23, 8)";
        break;
      case "Hy":
        return "rgb(119, 144, 178)";
        break;
      case "Volt":
        return "rgb(31, 31, 31)";
        break;
      case "LSL":
        return "rgb(61, 153, 112)";
        break;
      case "eC":
        return "rgb(145, 57, 96)";
        break;
      case "Lex":
        return "rgb(219, 202, 0)";
        break;
      case "API Blueprint":
        return "rgb(42, 204, 168)";
        break;
      case "AutoHotkey":
        return "rgb(101, 148, 185)";
        break;
      case "Isabelle":
        return "rgb(254, 254, 0)";
        break;
      case "Metal":
        return "rgb(143, 20, 233)";
        break;
      case "Clarion":
        return "rgb(219, 144, 30)";
        break;
      case "JSONiq":
        return "rgb(64, 212, 126)";
        break;
      case "Boo":
        return "rgb(212, 190, 193)";
        break;
      case "AutoIt":
        return "rgb(28, 53, 82)";
        break;
      case "Prolog":
        return "rgb(116, 40, 60)";
        break;
      case "SourcePawn":
        return "rgb(92, 118, 17)";
        break;
      case "AMPL":
        return "rgb(230, 239, 187)";
        break;
      case "FORTRAN":
        return "rgb(77, 65, 177)";
        break;
      case "ANTLR":
        return "rgb(157, 195, 255)";
        break;
      case "Harbour":
        return "rgb(14, 96, 227)";
        break;
      case "Tcl":
        return "rgb(228, 204, 152)";
        break;
      case "BlitzMax":
        return "rgb(205, 100, 0)";
        break;
      case "PigLatin":
        return "rgb(252, 215, 222)";
        break;
      case "Lasso":
        return "rgb(153, 153, 153)";
        break;
      case "ECL":
        return "rgb(138, 18, 103)";
        break;
      case "VHDL":
        return "rgb(173, 178, 203)";
        break;
      case "Elm":
        return "rgb(96, 181, 204)";
        break;
      case "Propeller Spin":
        return "rgb(127, 162, 167)";
        break;
      case "X10":
        return "rgb(75, 107, 239)";
        break;
      case "IDL":
        return "rgb(163, 82, 47)";
        break;
      case "ATS":
        return "rgb(26, 198, 32)";
        break;
      case "Ada":
        return "rgb(2, 248, 140)";
        break;
      case "Unity3D Asset":
        return "rgb(171, 105, 161)";
        break;
      case "Nu":
        return "rgb(201, 223, 64)";
        break;
      case "LFE":
        return "rgb(0, 66, 0)";
        break;
      case "SuperCollider":
        return "rgb(70, 57, 11)";
        break;
      case "Oxygene":
        return "rgb(205, 208, 227)";
        break;
      case "Gnuplot":
        return "rgb(240, 169, 240)";
        break;
      case "JFlex":
        return "rgb(219, 202, 0)";
        break;
      case "NetLinx":
        return "rgb(10, 160, 255)";
        break;
      case "Turing":
        return "rgb(69, 247, 21)";
        break;
      case "Vala":
        return "rgb(251, 229, 205)";
        break;
      case "Processing":
        return "rgb(0, 150, 216)";
        break;
      case "Arduino":
        return "rgb(189, 121, 209)";
        break;
      case "FLUX":
        return "rgb(136, 204, 255)";
        break;
      case "NetLogo":
        return "rgb(255, 99, 117)";
        break;
      case "Emacs Lisp":
        return "rgb(192, 101, 219)";
        break;
      case "Stan":
        return "rgb(178, 1, 29)";
        break;
      default:
        return "rgb(204, 204, 204)";
    }
  }

}
