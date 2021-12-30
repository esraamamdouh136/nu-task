import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ServiceService {
  param = {
    applicationID: "0228b239",
    applicationKeys: "9f3535d3013e28dab1856a34ce7c67e7",
  };

  constructor(private http: HttpClient) {}
  totalCalculation(body:any) {
    return this.http.post(
      `${environment.nutritionApi}?app_id=${this.param.applicationID}&app_key=${this.param.applicationKeys}`,
      body
    );
  }
}
