import { Component } from '@angular/core';

@Component({
  selector: 'JokesComp',
  templateUrl: './app.JokesComp.component.html',
  styleUrls: ['./app.JokesComp.component.css']
})
export class JokesComp {
  private myVar = 'JacButton';

  private myFunction() {
    alert("Alert!!");
  }

}
