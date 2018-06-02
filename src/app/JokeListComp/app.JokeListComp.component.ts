import { Component } from '@angular/core';
//import { Joke } from "src/app/JokesComp/app.JokesComp.component";
import { JokeComp } from "src/app/JokesComp/app.JokesComp.component";

@Component({
  selector: 'joke-list',
  templateUrl: './app.JokeListComp.component.html',
  styleUrls: ['./app.JokeListComp.component.css']
})
export class JokeListComp {
  jokes: Joke[];

  constructor() {
/*    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?","Hello-Me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?","Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me","I thought ‘That’s not very mature’")
    ];*/
  }
}

export class Joke {
  setup: string;
  punchline: string;
  hide: boolean;

  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}
