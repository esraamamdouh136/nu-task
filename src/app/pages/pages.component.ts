import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { LoaderService } from "../core/service/loader.service";
import { ServiceService } from "../core/service/service.service";

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
})
export class PagesComponent {
  food_list: any = [];
  nutritionFacts: any;
  loading: boolean = false;
  constructor(
    private service: ServiceService,
    private loaderService: LoaderService
  ) {
    loaderService.onLoadingChanged.subscribe(
      (isLoading) => (this.loading = isLoading)
    );
  }

  totalCalculationData(value: any) {
    debugger;
    let textareaArr = value.length ? value.trim().split("\n") : [];
    textareaArr.forEach((e: any) => {
      let arr = e.split(" ");
      let obj = {
        quantity: arr[0],
        name: arr[1],
        unit: arr[2],
      };
      this.food_list.push(obj);
    });
    let body = { ingr: textareaArr };
    this.service.totalCalculation(body).subscribe((res) => {
      this.nutritionFacts = res;
    });
  }
}
