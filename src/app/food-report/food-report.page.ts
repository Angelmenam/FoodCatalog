import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-report',
  templateUrl: './food-report.page.html',
  styleUrls: ['./food-report.page.scss'],
})
export class FoodReportPage implements OnInit {
  private foodData = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private foodService: FoodService) { }

  ngOnInit() {
    this.route.paramMap.subscribe (
      paramMap => {
        let foodId = paramMap.get('id');
        if(foodId == undefined){
          this.router.navigate(['/', 'home']);
        }
        else{
          this.foodService.getFoodReport(foodId).subscribe(
            data => {
              if(data.report != undefined && data.report.food != undefined){
                this.foodData = data.report.food;
              }
            },
            err => {

            }
          );
        }
      },
    )
  }

}
