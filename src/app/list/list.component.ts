import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FirebaseApp } from '@angular/fire';
import { snapshotToArray} from './list';
import {List} from './list';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  nickname: any = "";
  roomName: any = "";
  displayedColumns: string[] = ['roomName'];
  rooms: any = [];
  isLoadingResults = true;
  roomDatabase = this.firebase.database().ref('rooms/')


  constructor(
    private titlePage: Title, 
    private firebase: FirebaseApp, 
    private router: Router,
  ) {

    this.titlePage.setTitle('Room List');
    this.roomName= localStorage.getItem('roomName');
    firebase.database().ref('rooms/').on('value', (resp: any) => {
      this.rooms = [];
      this.rooms = snapshotToArray(resp);
      this.isLoadingResults = false;
    });
  }
  
  listRoom: List[] =[];
  dataSource: any = null;
  List: Array<List>=[];

  ngOnInit(): void {
    
  }

  displayedColuns: string[] = ['rooms'];
}
