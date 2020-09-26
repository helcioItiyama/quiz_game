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
    console.log('mudou ' + this.tries);
  };

  ngOnInit() {
  };
}
