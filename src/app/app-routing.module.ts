import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiveChatComponent } from './live-chat/live-chat.component';


const routes: Routes = [
  { path: '', redirectTo: '/live-chat', pathMatch: 'full' },
  { path: 'live-chat', component: LiveChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
