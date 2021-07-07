import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-logout',
  templateUrl: './btn-logout.component.html',
  styleUrls: ['./btn-logout.component.css'],
})
export class BtnLogoutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    const user = localStorage.getItem('nickname');
    localStorage.clear();
    if (!user) {
      console.log(user);
    } else {
      this.router.navigate(['login']);
    }
  }
}
