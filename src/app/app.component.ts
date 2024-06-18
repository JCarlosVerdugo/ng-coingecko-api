import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


export interface Coin {
  id:                               string;
  symbol:                           string;
  name:                             string;
  image:                            string;
  current_price:                    number;
  market_cap:                       number;
  market_cap_rank:                  number;
  fully_diluted_valuation:          number;
  total_volume:                     number;
  high_24h:                         number;
  low_24h:                          number;
  price_change_24h:                 number;
  price_change_percentage_24h:      number;
  market_cap_change_24h:            number;
  market_cap_change_percentage_24h: number;
  circulating_supply:               number;
  total_supply:                     number;
  max_supply:                       number;
  ath:                              number;
  ath_change_percentage:            number;
  ath_date:                         Date;
  atl:                              number;
  atl_change_percentage:            number;
  atl_date:                         Date;
  roi:                              null;
  last_updated:                     Date;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  coins: Coin[] = [];
  titles: string[] = [
    '#',
    'Coin',
    'Price',
    'Price Change',
    '24h Volume',
  ];

  constructor(
    private http: HttpClient
  ) {}


  ngOnInit(): void {
    this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
      .subscribe({
        next: (res) => {
          console.log({res})
          this.coins = res;
        },
        error: (err) => {
          console.error(err)
        }
      })
  }




}
