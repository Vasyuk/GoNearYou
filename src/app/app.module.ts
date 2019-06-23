import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MarketService } from './services/market.service';
import { MarketComponent } from './market/market.component';
import { Routes, RouterModule} from '@angular/router';
import { SingleMarketComponent } from './single-market/single-market.component';
import { MarketsComponent } from './markets/markets.component';

const appRoutes:Routes = [
  { path:'',component: MarketsComponent },
  { path:'market/:id',component: SingleMarketComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    SingleMarketComponent,
    MarketsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MarketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
