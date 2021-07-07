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
  tableUsers = this.firebase.database().ref('users/');

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

  submitLogin(user: any) {
    this.tableUsers
      .orderByChild('nickname')
      .equalTo(user.nickname)
      .once('value', (snapshot) => {
        if (snapshot.exists()) {
          localStorage.setItem('nickname', user.nickname);
          this.router.navigate(['/list']);
        } else {
          const newUser = this.firebase.database().ref('users/').push();
          newUser.set(user);
          localStorage.setItem('nickname', user.nickname);
          this.router.navigate(['/list']);
        }
      });
  }

  ngOnInit(): void {}
}
