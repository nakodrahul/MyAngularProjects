import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[]=[
  new Ingredient("Gulab Jamun", 10),
  new Ingredient("Ras Malai", 15),
  new Ingredient("Puran Poli", 5),
  new Ingredient("Basundi", 10)
];
  constructor() { }

  ngOnInit(): void {
  }

}
