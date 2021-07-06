import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import {ListComponent} from './list/list.component';
import { NewRoomComponent } from './new-room/new-room.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'list', component: ListComponent },
  { path: 'newRoom', component: NewRoomComponent },
  { path: 'chat', component: ChatComponent },
];

@NgModule ({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
