import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.component.html',
  styleUrls: ['./new-room.component.css'],
})
export class NewRoomComponent implements OnInit {
  tableDb = this.firebase.database().ref('rooms/');
  newRoom: string = '';
  roomCreated: boolean = false;
  roomExists: boolean = false;

  newRoomForm = this.formBuilder.group({
    roomName: ['', Validators.required],
  });

  constructor(
    private titlePage: Title,
    private formBuilder: FormBuilder,
    private firebase: FirebaseApp,
    private router: Router
  ) {
    this.titlePage.setTitle('New Room');
  }

  ngOnInit(): void {}

  addNewRoom(newRoom: any) {
    const room = newRoom;
    this.tableDb
      .orderByChild('roomName')
      .equalTo(room.roomName)
      .once('value', (snapshot: any) => {
        if (snapshot.exists()) {
          this.roomExists = !this.roomExists;
        } else {
          const newRoom = this.firebase.database().ref('rooms/').push();
          newRoom.set(room);
          this.roomCreated = !this.roomCreated;
          setTimeout(() => {
            this.router.navigate(['/list']);
          }, 2000);
        }
      });
  }
}
