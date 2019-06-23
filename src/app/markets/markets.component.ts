import { Component, OnInit } from '@angular/core';
import { MarketService } from '../services/market.service';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.scss']
})
export class MarketsComponent implements OnInit {
  types: any[];
  markets: any[];
  markets_sort: any[];

  title = 'GoNearYou';

  constructor(private marketService:MarketService){
    this.types = marketService.types;
    this.markets = marketService.markets;
    this.markets_sort = this.markets;
  };

  ngOnInit(){

  }

  onSelect(id) {
    let markets_sort = [];
    if(id !== "all"){
      this.markets.forEach(function(market) {
        if(market.type_id === id){
          markets_sort.push(market)
        }
      });
    }else{
      markets_sort = this.markets;
    }
    this.markets_sort = markets_sort
  }

}
