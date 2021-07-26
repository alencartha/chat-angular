import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { FirebaseApp } from '@angular/fire';

export const snapshotToArray = (snapshot: any) => {
  const returnArr: any = [];

  snapshot.forEach((childSnapshot: any) => {
    const item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  nickname: any = '';
  displayedColumns: string[] = ['roomname'];
  rooms = [];

  constructor(
    private titlePage: Title,
    private firebase: FirebaseApp,
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    public datepipe: DatePipe
  ) {
    this.titlePage.setTitle('Room List');
    this.nickname = localStorage.getItem('nickname');
    firebase
      .database()
      .ref('rooms')
      .on('value', (resp) => {
        this.rooms = [];
        this.rooms = snapshotToArray(resp);
      });
  }

  enterChatRoom(roomname: string) {
    const chat = {
      roomname: '',
      nickname: '',
      message: '',
      date: '',
      type: '',
    };
    chat.roomname = roomname;
    chat.nickname = this.nickname;
    chat.date != this.datepipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss');
    chat.message = `${this.nickname} entrou na sala`;
    chat.type = 'entrou';
    const newMessage = this.firebase.database().ref('chats/').push();
    newMessage.set(chat);

    this.firebase
      .database()
      .ref('roomusers/')
      .orderByChild('roomname')
      .equalTo(roomname)
      .on('value', (resp: any) => {
        let roomuser = [];
        roomuser = snapshotToArray(resp);
        const user = roomuser.find((x: any) => x.nickname === this.nickname);
        if (user !== undefined) {
          const userRef = this.firebase.database().ref('roomusers/' + user.key);
          userRef.update({ status: 'online' });
        } else {
          const newroomuser = { roomname: '', nickname: '', status: '' };
          newroomuser.roomname = roomname;
          newroomuser.nickname = this.nickname;
          newroomuser.status = 'online';
          const newRoomUser = this.firebase.database().ref('roomusers/').push();
          newRoomUser.set(newroomuser);
        }
      });

    this.router.navigate(['/chatroom', roomname]);
  }
  ngOnInit(): void {}
}
