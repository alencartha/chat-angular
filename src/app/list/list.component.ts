import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private titlePage: Title) {
    this.titlePage.setTitle('Room List');

  List: Array<List>=[];



  ngOnInit(): void {
  }


}
