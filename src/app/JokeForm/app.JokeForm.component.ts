import {Component, EventEmitter, Output} from '@angular/core';
import {Joke} from "../JokeListComp/app.JokeListComp.component";

@Component({
  selector: 'JokeForm',
  templateUrl: './app.JokeForm.component.html',
  styleUrls: ['./app.JokeForm.component.css']
})

export class JokeFormComp {
  @Output() emitJokeCreated = new EventEmitter<Joke>();

  createJoke(setup:string, punchline:string) {
    this.emitJokeCreated.emit(new Joke(setup, punchline));
  }
}
