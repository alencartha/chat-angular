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
  messageForm!: FormGroup;
  chatMessage: any[] = [];

  constructor(
    private titlePage: Title,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private datepipe: DatePipe,
    private firebase: FirebaseApp
  ) {
    this.titlePage.setTitle('Chat Room');
    this.firebase
      .database()
      .ref('chats/')
      .on('value', (resp) => {
        this.chatMessage = snapshotToArray(resp);
      });
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
    console.log(this.chatMessage);
    this.chatMessage.push(form);
    const newMessage = this.firebase.database().ref('chats/').push();
    newMessage.set(form);

    //this.chatMessage.push(form.message);
  }
}
