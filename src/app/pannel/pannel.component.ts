import { Component, OnInit } from '@angular/core';
import { Phrase } from '../shared/phrase.model';
import { Phrases } from './phrase-mock';

@Component({
  selector: 'app-pannel',
  templateUrl: './pannel.component.html',
  styleUrls: ['./pannel.component.css']
})
export class PannelComponent implements OnInit {
  public instructions: string = "Traduza a frase:";
  public phrases: Phrase[] = Phrases;
  public response: string;
  public turn: number = 0;
  public phraseTurn: Phrase;
  public progress: number = 0;

  constructor() {
    this.phraseTurn = this.phrases[this.turn];
   };

  ngOnInit() {
  };

  public updateResponse(response:Event):void {
    this.response = (<HTMLInputElement>response.target).value;
  };

  public verifyResponse():void {
    if(this.response === this.phraseTurn.phrasePtBr) {
      alert('A tradução está correta');

      this.turn++

      this.progress += (100 / this.phrases.length);

      this.phraseTurn = this.phrases[this.turn];
      console.log(this.progress)
    } else {
      alert('A tradução está errada');
    }
  };

}
