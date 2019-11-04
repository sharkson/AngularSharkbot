import { Component, OnInit } from '@angular/core';
import { LiveChatService } from '../services/live-chat.service';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';
import { scan } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.scss'],
  animations: [
    trigger('fromMessage', [
      state('void', style({
        opacity: 0,
        transform: 'translateX(100%)',
      })),
      transition('void => final', [
        animate('.5s')
      ]),
    ]),
    trigger('toMessage', [
      transition('void => final', [
        animate(".5s", keyframes([
          style({ transform: 'translateX(-100%) translateY(8ex)', marginLeft: '20ex', opacity: 0, offset: 0 }),
          style({ transform: 'translateX(-100%)', marginLeft: '20ex', opacity: .25, offset: .25 }),
          style({ transform: 'translateX(0)', opacity: 1, offset: 1 }),
        ]))
      ]),
    ]),
    trigger('sendMessage', [
      state('sent', style({
        opacity: 0
      })),
      transition('none => sent', [
        animate(".1s", keyframes([
          style({ opacity: 1, offset: 0 }),
          style({ transform: 'translateY(-9ex)', opacity: 0, offset: 1 })
        ]))
      ]),
    ])
  ],
})
export class LiveChatComponent implements OnInit { //TODO: figure out the overflow thing causing 2 scroll bars, and make it autosroll down to the bottom after message recieved

  messages: Observable<Message[]>;
  message = new FormControl();
  userName = new FormControl();
  sentMessage = new FormControl();

  constructor(public liveChatService: LiveChatService) { }

  ngOnInit() {
    this.userName.setValue('TestUser');
    this.messages = this.liveChatService.conversation.asObservable().pipe(scan((acc, val) => acc.concat(val)));
  }

  sendMessage() {
    this.liveChatService.converse(this.message.value, this.userName.value);
    this.sentMessage.setValue(this.message.value);
    this.message.setValue('');
  }
}
