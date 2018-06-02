import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from "./app.component";
import {JokeComp} from "src/app/JokesComp/app.JokesComp.component";
import {JokeListComp} from "src/app/JokeListComp/app.JokeListComp.component";
import {JokeFormComp} from "src/app/JokeForm/app.JokeForm.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, JokeComp, JokeListComp, JokeFormComp],
  bootstrap: [AppComponent]
})

export class AppModule {

}
