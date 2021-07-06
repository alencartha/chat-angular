import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder } from '@angular/forms';

import { FirebaseApp } from '@angular/fire';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  tableUsers: any;

  loginForm = this.formBuilder.group({
    nickname: '',
  });

  constructor(
    private titlePage: Title,
    private firebase: FirebaseApp,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.titlePage.setTitle('Login');
  }

  submitLogin(user: any): void {
    console.log(user.nickname);
    this.firebase
      .firestore()
      .collection('users')
      .add({ nickname: user.nickname })
      .then(() => {
        localStorage.setItem('nickname', user.nickname);
      });
  }

  ngOnInit(): void {}
}
