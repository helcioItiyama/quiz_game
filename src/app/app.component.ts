import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public gameOnPlay:boolean = true;
  public typeEnding:string;

  public gameOver(type: string): void {
    this.gameOnPlay = false;
    this.typeEnding = type;
  }

  public playAgain(): void {
    this.gameOnPlay= true;
    this.typeEnding = undefined;
  }
}
