import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  messageForm!: FormGroup;
  chatMessage = '';

  constructor(
    private titlePage: Title,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private datepipe: DatePipe,
    private firebase: FirebaseApp
  ) {
    this.titlePage.setTitle('Chat Room');
  }

  returnForList(): void {
    this.router.navigate(['list']);
  }

  ngOnInit(): void {
    this.messageForm = this.formBuilder.group({
      message: [null, Validators.required],
    });
  }

  formSubmit(form: any) {
    console.log(form.message);
    this.chatMessage = form.message;
  }
}
