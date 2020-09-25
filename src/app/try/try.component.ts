import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent implements OnInit {
  public emptyHeart: string = "/assets/coracao_vazio.png";
  public fullHeart: string = "/assets/coracao_cheio.png";

  constructor() { }

  ngOnInit() {
  }

}
