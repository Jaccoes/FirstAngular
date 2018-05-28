import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from "./app.component";
import { MyComponentComponent } from './my-component/my-component.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, MyComponentComponent],
  bootstrap: [AppComponent]
})

export class AppModule {

}
