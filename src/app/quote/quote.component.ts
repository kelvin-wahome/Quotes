import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
    quotes = [
      new Quote(1, 'Let go and let God', 'J cole', 'Wahome', new Date(2019,1,2)),
      new Quote(2, 'What goes around comes around', 'JID', 'Ann', new Date(2019,1,2)),
      new Quote(3, 'You cant eat your cake and have it', 'Ghandi', 'Kelvin', new Date(2019,1,2)),
    ]


    deleteQuote(isComplete,index){
        if (isComplete){
            let toDelete = confirm (`Are you sure you want to delete $ {this.quotes[index].name}`)

            if (toDelete){
              this.quotes.splice(index,1)
            }
          }
        }


        addNewQuote(quote){
          let quoteLength = this.quotes.length;
          quote.id=quoteLength+1;
          this.quotes.push(quote)
        }
        constructor(){}
        ngOnInit(){

        }
}
