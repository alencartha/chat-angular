import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBkw0KKsnIkDrFgfQw5u4B8qVCRTTpsKg4',
  databaseURL: 'https://chat-angular-26d93-default-rtdb.firebaseio.com',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}

  title = 'chat-angular';
}
