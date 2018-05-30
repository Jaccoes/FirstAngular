import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from "./app.component";
import {JokesComp} from "src/app/JokesComp/app.JokesComp.component";
import {JokeListComp} from "src/app/JokeListComp/app.JokeListComp.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, JokesComp, JokeListComp],
  bootstrap: [AppComponent]
})

export class AppModule {

}
