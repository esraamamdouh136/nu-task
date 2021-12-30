import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
})
export class FoodListComponent {
  @Input() food_list : any;
  foodList : any;
  constructor() { }
}
