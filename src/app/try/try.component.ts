import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Heart } from '../shared/heart.model';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent implements OnInit, OnChanges {
  @Input() public tries:number;

  public hearts: Heart[] = [
    new Heart(true),
    new Heart(true),
    new Heart(true)
  ];

  constructor() {
    console.log(this.hearts)
  };

  ngOnChanges() {
    if(this.tries !== this.hearts.length) {
      let index = this.hearts.length - this.tries;
      this.hearts[index - 1].isFull = false;
    }
  };

  ngOnInit() {
  };
}
