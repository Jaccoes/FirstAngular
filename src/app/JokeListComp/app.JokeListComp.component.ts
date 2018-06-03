import { Component } from '@angular/core';
//import { Joke } from "src/app/JokesComp/app.JokesComp.component";
import { JokeComp } from "src/app/JokesComp/app.JokesComp.component";

@Component({
  selector: 'joke-list',
  templateUrl: './app.JokeListComp.component.html',
  styleUrls: ['./app.JokeListComp.component.css']
})
export class JokeListComp {
  jokes: Joke[] = [];

  constructor() {
  }

  addJoke(Joke) {
    this.jokes.push(Joke);
  }

  deleteJoke(Joke) {
    let indexToDelete = this.jokes.indexOf(Joke);
    if(indexToDelete !== -1) {
      this.jokes.splice(indexToDelete,1)
    }
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

