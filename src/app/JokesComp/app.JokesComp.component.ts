import {Component, Input} from '@angular/core';
import {Joke} from "../JokeListComp/app.JokeListComp.component";

@Component({
  selector: 'JokeComp',
  templateUrl: './app.JokesComp.component.html',
  styleUrls: ['./app.JokesComp.component.css']
})

export class JokeComp {
  @Input('Joke') data: Joke;
}

