import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alianzaFront';
  step = 0;

  setStep(index: number) {
    this.step = index;
  }
}
