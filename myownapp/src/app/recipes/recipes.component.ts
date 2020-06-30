import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  @Input () data: string;
  constructor() { }

  public range = [];
  public index =0;

  add(){
    this.index++;
    let el={el:'dynamic el',idx: this.index};
    this.range.push(el);


  }
  remove(i){
    this.range.splice(i,1);
    console.log(this.range);
  }

  ngOnInit(): void {
  }

}
