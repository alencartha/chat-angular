import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FirebaseApp } from '@angular/fire';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  constructor(
    private titlePage: Title,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private firebase: FirebaseApp
  ) {
    this.titlePage.setTitle('Chat Room');
  }

  returnForList(): void {
    this.router.navigate(['list']);
  }

  ngOnInit(): void {}
}
