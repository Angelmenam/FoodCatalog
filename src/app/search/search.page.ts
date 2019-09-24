import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  constructor(private foodService: FoodService) { }
  private foodList = [];
  private errormessage = '';
  ngOnInit() {
  }

  getItems(event) {
    this.errormessage = '';
    let search = event.target.value;
    if(search !== undefined && search !== '') {
      this.foodService.getFood(search).subscribe(
        data => {
          if(data.list != undefined && data.list.item != undefined){
            this.foodList = data.list.item;
          }
          else{
            console.error("NORESULTS");
            this.foodList = []
            this.errormessage = 'No results were found';
          }
        },
        err => {
          console.error("ERROR");
          this.errormessage = 'There was an issue with your search';
          debugger;
        }
      );
    } else{
      this.foodList = [];
    }
  }

}
