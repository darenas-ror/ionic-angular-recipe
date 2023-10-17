import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-recipe',
  templateUrl: './detail-recipe.page.html',
  styleUrls: ['./detail-recipe.page.scss'],
})
export class DetailRecipePage implements OnInit {
  data:any;

  constructor(
    private activatedRoute:ActivatedRoute
  ) {

    this.activatedRoute.paramMap.subscribe((data) => {
        console.log(data)
      }
    );

    this.data = this.activatedRoute.snapshot.paramMap.get('id');

    console.log(" this.data ", this.data)
  }

  ngOnInit() {
  }

}
