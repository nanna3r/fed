import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'FED';
  type = 'list';

  typeCallback(value) {
    this.type = value;
  }
}
