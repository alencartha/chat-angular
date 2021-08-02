import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FirebaseApp } from '@angular/fire';

export const snapshotToArray = (snapshot: any) => {
  const returnArr: any[] = [];

  snapshot.forEach((childSnapshot: any) => {
    const item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  nickname: any = localStorage.getItem('nickname');
  messageForm!: FormGroup;
  chatMessage: any[] = [];
  returnForm!: FormGroup;

  constructor(
    private titlePage: Title,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private datepipe: DatePipe,
    private firebase: FirebaseApp
  ) {
    //this.nickname = localStorage.getItem('nickname');
    this.titlePage.setTitle('Chat Room');
    this.firebase
      .database()
      .ref('chats/')
      .on('value', (resp) => {
        this.chatMessage = snapshotToArray(resp);
      });
  }

  ngOnInit(): void {
    this.messageForm = this.formBuilder.group({
      user: [this.nickname],
      message: [null, Validators.required],
    });

    this.returnForm = this.formBuilder.group({
      message: [`${this.nickname} saiu da sala `],
    });
  }

  formSubmit(form: any) {
    console.log(this.chatMessage);
    this.chatMessage.push(form);
    const newMessage = this.firebase.database().ref('chats/').push();
    newMessage.set(form);
  }

  returnFormSubmit(formReturn: any) {
    this.chatMessage.push(formReturn);
    const newMessage = this.firebase.database().ref('chats/').push();
    newMessage.set(formReturn);

    setTimeout(() => this.router.navigate(['list']), 1000);
  }
}
