import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {List} from './list';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  List: Array<List>=[];

  constructor() { }

  ngOnInit(): void {
  }

}
