import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.component.html',
  styleUrls: ['./new-room.component.css'],
})
export class NewRoomComponent implements OnInit {
  constructor(private titlePage: Title) {
    this.titlePage.setTitle('New Room');
  }

  ngOnInit(): void {}
}
