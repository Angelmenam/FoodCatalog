import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  apiUrl: string = 'https://api.nal.usda.gov/ndb/search/';
  reportUrl: string = 'https://api.nal.usda.gov/ndb/reports/';
  apiKey: string = '2TBH64tomAQZPIWHrafOv9BiW7qsxAAhu0scoIa8';
  constructor(private http: HttpClient) { }

  getFood(foodName:string): Observable<any> {
    let searchURL = this.apiUrl + '?&q=' + foodName + '&format=json&sort=n&max=25&offset=0&api_key=' + this.apiKey;
    return this.http.get(searchURL).pipe(map((response: any) => response));
  }

  getFoodReport(foodId: string): Observable<any>{
    let searchURL = this.reportUrl + '?&ndbno=' + foodId + '&type=b&format=json&api_key=' + this.apiKey;
    return this.http.get(searchURL).pipe(map((response: any) => response));
  }
}
