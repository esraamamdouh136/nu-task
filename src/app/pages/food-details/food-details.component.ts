import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
})
export class FoodDetailsComponent implements OnInit {
  @Input() nutritionFacts:any;
  calories :number = 0;
  fat:string='';
  cholesterol:string='';
  sodium: string='';
  carbohydrate:string='';
  fiber:string='';
  fiberQuantity:string='';
  sugars:string='';
  protein:string='';
  proteinQuantity:string='';
  vitamin:string='';
  calcium:string='';
  calciumQuantity:string='';
  iron:string='';
  ironQuantity:string='';
  potassium:string='';
  potassiumQuantity:string='';
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    setTimeout(() => {
      this.calories = this.nutritionFacts.calories
      this.fat = Math.round(this.nutritionFacts.totalDaily.FAT?.quantity) +' '+ this.nutritionFacts.totalDaily.FAT?.unit
      this.cholesterol = this.nutritionFacts.totalDaily.CHOLE?.quantity + this.nutritionFacts.totalDaily.CHOLE?.unit
      this.sodium = Math.round(this.nutritionFacts.totalNutrients.NA?.quantity) + this.nutritionFacts.totalNutrients.NA?.unit
      this.carbohydrate = Math.round(this.nutritionFacts.totalDaily.CHOCDF?.quantity) +' '+ this.nutritionFacts.totalDaily.CHOCDF?.unit
      this.fiber = Math.round(this.nutritionFacts.totalDaily.FIBTG?.quantity) +' '+ this.nutritionFacts.totalDaily.FIBTG?.unit
      this.fiberQuantity = Math.round(this.nutritionFacts.totalNutrients.FIBTG?.quantity) + this.nutritionFacts.totalNutrients.FIBTG?.unit;
      this.sugars = Math.round(this.nutritionFacts.totalNutrients.SUGAR?.quantity) + this.nutritionFacts.totalNutrients.SUGAR?.unit
      this.protein = Math.round(this.nutritionFacts.totalDaily.PROCNT?.quantity) + this.nutritionFacts.totalDaily.PROCNT?.unit
      this.proteinQuantity = Math.round(this.nutritionFacts.totalNutrients.FIBTG?.quantity) + this.nutritionFacts.totalNutrients.FIBTG?.unit;
      this.vitamin = Math.round(this.nutritionFacts.totalDaily.VITB12?.quantity) + this.nutritionFacts.totalDaily.VITB12?.unit
      this.calcium = Math.round(this.nutritionFacts.totalDaily.CA?.quantity) + this.nutritionFacts.totalDaily.CA?.unit
      this.calciumQuantity = Math.round(this.nutritionFacts.totalNutrients.CA?.quantity) + this.nutritionFacts.totalNutrients.CA?.unit;
      this.iron =  Math.round(this.nutritionFacts.totalDaily.FE?.quantity) + this.nutritionFacts.totalDaily.FE?.unit
      this.ironQuantity = Math.round(this.nutritionFacts.totalNutrients.FE?.quantity) + this.nutritionFacts.totalNutrients.FE?.unit;
      this.potassium =  Math.round(this.nutritionFacts.totalDaily.K?.quantity) + this.nutritionFacts.totalDaily.K?.unit
      this.potassiumQuantity = Math.round(this.nutritionFacts.totalNutrients.K?.quantity) + this.nutritionFacts.totalNutrients.K?.unit;
    });
   }
}
