import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
    goalDelete(complete:boolean){
      this.isComplete.emit(complete);
    }
  @Input() quote:Quote;
  constructor() { }

  ngOnInit() {
  }

}
