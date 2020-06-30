import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]= [
new Recipe("1. AamRas","A sweet delicious  indian dish ","https://4.imimg.com/data4/HN/MH/MY-11458628/sweet-aamras-500x500.jpg"),
new Recipe("2. Puran Poli","A sweet tasty indian dish ","https://4.bp.blogspot.com/-OsYJd0GvUmY/WytGpgT-CuI/AAAAAAAAFUY/1K_pgpPRBQUJ-6D0p6EW3WaJUcpUfENmgCLcBGAs/s400/IMG_20170711_195723543.jpg"),
new Recipe("3. Ras Malai","A sweet delicious  indian dish ","https://www.cookwithmanali.com/wp-content/uploads/2014/07/Rasmalai-Recipe.jpg"),
new Recipe("4. Gulab Jamun","A sweet delicious  indian dish ","https://www.spiceupthecurry.com/wp-content/uploads/2019/06/gulab-jamun-recipe-16.jpg"),
new Recipe("5. Basundi","A sweet delicious  indian dish ","http://foodhallonline.com/wp-content/uploads/2016/06/Basundi-400x400.jpg")


  ];

  constructor() { }

  ngOnInit(): void{
  }

}
