import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Le titre de mon application';

  nom:string = "Jean";

  verif:boolean = false;

  element:number = 15;

  etudiants:any[] = [
    {"nom":"Dupont", "prenom":"Louis", "age":28},
    {"nom":"Toto", "prenom":"Soohie", "age":22},
    {"nom":"Titi", "prenom":"Marie", "age":33},
    {"nom":"Durant", "prenom":"Joel", "age":27}
  ]

  choixClasse(isFirst:boolean, isLast:boolean, isEven:boolean)
  {
    var ma_classe:string="";
    if(isFirst || isLast)
    {
      ma_classe = "first_last ";
    }
    if(isEven)
    {
      ma_classe += "ligne_even";
    }
    else
    {
      ma_classe += "ligne_odd";
    }
    return ma_classe;
  }

}
