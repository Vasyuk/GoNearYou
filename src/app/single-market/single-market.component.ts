import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarketService } from '../services/market.service';


@Component({
  selector: 'app-single-market',
  templateUrl: './single-market.component.html',
  styleUrls: ['./single-market.component.scss']
})
export class SingleMarketComponent implements OnInit {
  id: number;
  private sub: any;
  markets: any[];
  market: any[];

  constructor(private route: ActivatedRoute, private marketService:MarketService) {
    this.markets = marketService.markets;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
    });
    var id = this.id;
    var marketi;
    this.markets.forEach(function(market) {
      if(market.id === id){
        marketi = market;
      }
    });
    this.market = marketi;
    console.log(this.market);
  }

}
