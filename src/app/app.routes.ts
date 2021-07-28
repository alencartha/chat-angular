import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { NewRoomComponent } from './new-room/new-room.component';
import { ChatComponent } from './chat/chat.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'newRoom', component: NewRoomComponent },
  { path: 'chat/:room-name', component: ChatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
