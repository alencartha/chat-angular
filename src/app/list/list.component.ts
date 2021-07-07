import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import * as firebase from 'firebase';
import {List} from './list';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
  constructor(private titlePage: Title) {
    this.titlePage.setTitle('Room List');

  List: Array<List>=[];


  
  

  ngOnInit(): void {}
}
