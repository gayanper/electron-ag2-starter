import { Component } from '@angular/core';
import * as fs from 'fs';

@Component({
  selector: 'ha-app',
  template: '<h1>Hello Angular2 {{message}}</h1>'
})
export class AppComponent {
  private message:string;

  constructor() {
    if(fs.existsSync("./db.json")) {
      this.message = "exist";
    } else {
      this.message = "not exist";
    }
  }
}
