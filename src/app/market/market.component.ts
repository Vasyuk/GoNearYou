import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {

  @Input() marketId = "";
  @Input() marketName;
  @Input() marketTimeOpen;
  @Input() marketImgUrl;
  @Input() marketTimeClosing;
  @Input() marketAdress;

  constructor() { }

  ngOnInit() {
  }

}
