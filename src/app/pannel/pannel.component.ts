import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
  public response: string = '';
  public turn: number = 0;
  public tries: number = 3;
  public phraseTurn: Phrase;
  public progress: number = 0;
  @Output() public gameOver: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.updateTurn();
   };

  ngOnInit() {
  };

  public updateResponse(response:Event):void {
    this.response = (<HTMLInputElement>response.target).value;
  };

  public verifyResponse():void {
    if(this.response === this.phraseTurn.phrasePtBr) {

      this.turn++

      this.progress += (100 / this.phrases.length);

      if(this.turn === 4) {
        this.gameOver.emit('victory');
      }

      this.updateTurn();

    } else {
      this.response = '';
      this.tries--

      if(this.tries === -1) {
        this.gameOver.emit('failure');
      }
    }
  };

  public updateTurn(): void {
    this.phraseTurn = this.phrases[this.turn];
    this.response = '';
  }

}
