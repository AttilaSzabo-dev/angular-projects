import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .output {
        font-weight: bold;
      }
    `
  ]
})
export class AppComponent {
  allowClick = false;
  updatedtext = "";
  username;

  watchInput(event: any) {
    this.updatedtext = event.target.value;
     if(this.updatedtext.length > 0) {
      this.allowClick = true;
     } else {
      this.allowClick = false;
     }
  }

  resetUsername() {
    this.username = "";
    this.allowClick = false;
  }
}
